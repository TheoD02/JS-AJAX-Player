var containerplayer = document.getElementById("container-mp3"),
    player = document.getElementById("audioplayer"),
    btnPlay = document.querySelectorAll(".mdi-play-circle-outline");
// Cache le lecteur HTML5 par défaut
player.removeAttribute("controls");


var lastTablePlayBtnClicked = null;
// Init du player lors du chargement d'un nouveau tableau (de pagination.js)
function initplayer() {
    // Récupère les nouveau bouton
    // Attend 100ms a repetition uniquement tant que le nb de btnPlay dans la liste est inférieur à 1
    setTimeout(function () {
        var nbBtn = document.querySelectorAll(".playback>i.mdi-play-circle-outline").length;
        while (nbBtn < 1) {
            // Stop la boucle et la repetition de la function
            clearTimeout(this);
        }
        btnPlay = document.querySelectorAll(".mdi-play-circle-outline");
        btnPlay.forEach(btn => {
            btn.addEventListener("click", playerPlay, false);
        });
    }, 200);

    // Regarder si le lecteur a déjà une source, si pas de source lui donner la 1ere track du tableau afficher à l'écran
    if (player.getAttribute("src") === "") {
        // Récupère l'url du premier bouton de lecture
        var firstUrl = document.querySelector(".playback > i.mdi.mdi-play-circle-outline").getAttribute("url");
        // Assigne l'url au lecteur
        player.setAttribute("src", firstUrl);

        // Assigne donc le dernier bouton 'cliquer' comme le premier bouton de lecture
        lastTablePlayBtnClicked = btnPlay[0];
    }

    // Lire les tags du fichier en cours
    readMP3_Tags(player.getAttribute("src"));

    // Show player when table and all data init
    containerplayer.style.display = "block";
}

// Read Tags to Show on Player
var mp3Infos = document.getElementById("mp3-infos");
function readMP3_Tags(fileToRead) {
    ID3.loadTags(fileToRead, function () {
        var tags = ID3.getAllTags(fileToRead);
        mp3Infos.innerText = tags.title + " - " + tags.artist;
    });
}

/* TIME SECTION*/
var timeProgress = document.getElementById("progress-bar-mp3");
var progress = document.getElementById("buffer");
// Update Time & Listener (timeupdate)
player.addEventListener('timeupdate', updateTime, false);
function updateTime() {
    // Calcul du temps déjà jouer
    var seconds_played = parseInt(player.currentTime % 60);
    var minutes_played = parseInt((player.currentTime / 60) % 60);
    // Calcul du temps total de la musique
    var total_seconds = parseInt(player.duration % 60);
    var total_minutes = parseInt((player.duration / 60) % 60);

    if (total_seconds == null || total_minutes == null) {
        timeProgress.style.width = 0 + "%";
        timeProgress.innerHTML = "Aucune données...";
    }
    if (total_seconds !== null || total_minutes !== null) {
        timeProgress.style.width = 0 + "%";
        timeProgress.innerHTML = "En attente de lecture...";
    }
    if ((seconds_played !== 0 || minutes_played !== 0) && (total_seconds !== null || total_minutes !== null)) {
        var correct_time_played = zeroWarn(seconds_played, minutes_played);
        var correct_total_time = zeroWarn(total_seconds, total_minutes);
        var final_time = correct_time_played[1] + ":" + correct_time_played[0] + "/" + correct_total_time[1] + ":" + correct_total_time[0];

        // Calcul & Update Progress Bar 
        var pourcentage = (player.currentTime / player.duration) * 100;

        timeProgress.style.width = (pourcentage) + "%";
        timeProgress.innerHTML = final_time + " (" + parseInt(pourcentage) + "%)";
    }
    else {
        if (!player.paused) {
            timeProgress.style.width = 0 + "%";
            timeProgress.innerHTML = "Initialisation...";
        }
    }
    var buffered = player.buffered;
    if (buffered.length) {
        var loaded = Math.round(100 * buffered.end(0) / player.duration);

        progress.style.width = loaded + '%';
        progress.style.backgroundColor = "";
    }
}


// Rajoute un zéro devant si le chiffre et inférieur à 10 (Retour de valeur [secondes | minutes])
function zeroWarn(seconds, minutes) {
    return [(seconds >= 10) ? seconds : "0" + seconds, (minutes >= 10) ? minutes : "0" + minutes]
}
/* FIN TIME SECTION */

/* MUSIC POSTION (IN TIME) */
var containerProgress = document.getElementById("mp3-progress-bar-container");
// Avancement (Slider)
containerProgress.addEventListener('click', function (e) {
    timeProgress.style.width = e.offsetX + "px";
    var pct = Math.floor((e.offsetX / containerProgress.offsetWidth) * 100);
    sliderAvancement(pct);
    timeProgress.innerHTML = pct + " %";
}, false);

// Changer l'avancement dans la musique 
function sliderAvancement(time) {
    var seconds = player.duration * (time / 100);
    player.currentTime = seconds;
    if (player.paused) {
        player.play();
    }
}
/* FIN MUSIC POSTION (IN TIME) */

// Gestion du volume 
var volume = document.getElementById("mp3-volume");
volume.addEventListener("input", function () { player.volume = (volume.value / 100); }, false);
volume.value = 100;

/* GESTION BTN PLAY/PAUSE TABLE */
var btnPlayPauseLecteur = document.getElementById("btn-play-pause");

btnPlayPauseLecteur.addEventListener("click", playerPlay, false);


function playerPlay() {
    // Si le bouton est de type btnPlay
    if (this.nodeName === "I") {
        detectedNewUrl(this.getAttribute("url"));
        lastTablePlayBtnClicked = this;
        var btnPauseStatus = document.querySelectorAll(".mdi-pause-circle-outline");
        btnPauseStatus.forEach(element => {
            element.classList.remove("mdi-pause-circle-outline");
            element.classList.add("mdi-play-circle-outline");
        })
    }
    if (!player.paused) {
        player.pause();
        playPause_Icons(lastTablePlayBtnClicked, "PAUSE");
        playerBtnStatus("PAUSE");
    }
    else {
        player.play();
        playPause_Icons(lastTablePlayBtnClicked, "PLAY");
        playerBtnStatus("PLAY");
    }
}

// Detect si l'url du bouton est le même que celui actuellement dans le lecteur
var cur_url = "";
function detectedNewUrl(last) {
    cur_url = player.getAttribute("src");
    if (last !== cur_url) {
        cur_url = last;
        player.setAttribute("src", last);
        readMP3_Tags(last);
    }
}

// Permet de changer le logo [Play & Pause]
function playPause_Icons(element, status) {
    // Si reçois PAUSE alors afficher le btn play, si reçois PLAY affiche le bouton PLAY
    if (status.toUpperCase() === "PAUSE") {
        element.classList.add("mdi-play-circle-outline");
        element.classList.remove("mdi-pause-circle-outline");
    }
    else if (status.toUpperCase() === "PLAY") {
        element.classList.add("mdi-pause-circle-outline");
        element.classList.remove("mdi-play-circle-outline");
    }
    else {
        alert("Unknow receive (playPauseIcons function): " + status)
    }
}

// Change le bouton play du lecteur
function playerBtnStatus(status) {
    // Si reçois PAUSE alors afficher le btn play, si reçois PLAY affiche le bouton PLAY
    if (status.toUpperCase() === "PAUSE") {
        btnPlayPauseLecteur.setAttribute("value", "Play");
    }
    else if (status.toUpperCase() === "PLAY") {
        btnPlayPauseLecteur.setAttribute("value", "Pause");
    }
    else {
        alert("Unknow receive (playPauseIcons function): " + status)
    }
}

/* FIN GESTION BTN PLAY/PAUSE TABLE */


// EXPERIMENTAL 

player.onsuspend = (event) => {
    timeProgress.innerHTML = ('Data loading has been suspended.');
};

player.onwaiting = (event) => {
    timeProgress.style.width = 100 + "%";
    timeProgress.innerHTML = "Chargement...";
};
player.onerror = function () {
    timeProgress.innerHTML = ("Error " + player.error.code + "; details: " + player.error.message);
}