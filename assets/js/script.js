
var containerplayer = document.getElementById("container-mp3"),
    player = document.getElementById("audioplayer"),
    progress = document.getElementById("mp3-progress-bar"),
    containerProgress = document.getElementById("mp3-progress-bar-container"),
    btnPlayPause = document.getElementById("btn-play-pause"),
    mp3Infos = document.getElementById("mp3-infos"),
    btnChangeMP3 = document.getElementById("mp3-change"),
    btnPlay = document.querySelectorAll(".mdi-play-circle-outline"),
    volume = document.getElementById("mp3-volume");

var btnRefresh = document.querySelector(".refresher");
btnRefresh.addEventListener("click", function () {
    $.ajax({
        url: 'get_table.php',
        method: "GET",
        dataType: 'json',
        success: function (response) {
            $('#dynamic-table').html(response);
        }
    });
    // Wait dynamic update to get new btn
    setTimeout(function () {
        btnPlay = document.querySelectorAll(".mdi-play-circle-outline");
        console.log(btnPlay);
        // Ecoute de tous les boutons "Play" de la listes
        btnPlay.forEach(element => {
            element.addEventListener("click", clickPlayPauseList, false);
        });
    }, 500);

});


// Cache le lecteur HTML5 par défault
player.removeAttribute("controls");

// Update Time & Listener (timeupdate)
player.addEventListener('timeupdate', updateTime, false);
function updateTime() {
    // Calcul du temps déjà jouer
    var seconds_played = parseInt(player.currentTime % 60);
    var minutes_played = parseInt((player.currentTime / 60) % 60);
    // Calcul du temps total de la musique
    var total_seconds = parseInt(player.duration % 60);
    var total_minutes = parseInt((player.duration / 60) % 60);

    var correct_time_played = zeroWarn(seconds_played, minutes_played);
    var correct_total_time = zeroWarn(total_seconds, total_minutes);
    var final_time = correct_time_played[1] + ":" + correct_time_played[0] + "/" + correct_total_time[1] + ":" + correct_total_time[0];

    // Calcul & Update Progress Bar 
    var pourcentage = (player.currentTime / player.duration) * 100;
    progress.style.width = pourcentage + "%";
    progress.innerHTML = final_time + " (" + parseInt(pourcentage) + "%)";
}

// Rajoute un zéro devant si le chiffre et inférieur à 10 (Retour de valeur [secondes | minutes])
function zeroWarn(seconds, minutes) {
    return [(seconds >= 10) ? seconds : "0" + seconds, (minutes >= 10) ? minutes : "0" + minutes]
}

var url = "";
var last_url = "";
// Detect play & pause - Listener (click)
function clickPlayPauseList() {
    // Update status of other btn's (If pause icons replace by play icons)
    var btnPauseStatus = document.querySelectorAll(".mdi-pause-circle-outline");
    btnPauseStatus.forEach(element => {
        element.classList.remove("mdi-pause-circle-outline");
        element.classList.add("mdi-play-circle-outline");
    })

    last_url = this.getAttribute("url");
    // Si player en pause alors lire
    if (player.paused) {
        if (last_url !== url) {
            url = last_url;
            change(last_url);
        }
        player.play();
        lastbtn = this;
        btnPlayPause.setAttribute("value", "Pause");
        playPause_Icons(this, false);
    }
    else // Si player en lecture alors pause
    {
        // Compare l'url du bouton et celui en cours dans le lecteur (Si pas les mêmes changer l'url du lecteur par la nouvelle reçu puis relancer automatiquement la lecture)
        if (last_url !== url) {
            url = last_url;
            change(last_url);
            player.play();
            lastbtn = this;
            btnPlayPause.setAttribute("value", "Pause");
            playPause_Icons(this, false);
        }
        else {
            player.pause();
            btnPlayPause.setAttribute("value", "Play");
            playPause_Icons(this, true);
        }
    }
}
function clickPlayPauseBtnLecteur() {
    if (player.paused) {
        player.play();
        btnPlayPause.setAttribute("value", "Pause");
        if (lastbtn.classList !== null) {
            playPause_Icons(lastbtn, false)
        }

    }
    else // Si player en lecture alors pause
    {
        btnPlayPause.setAttribute("value", "Play");
        player.pause();
        if (lastbtn.classList !== null) {
            playPause_Icons(lastbtn, true)
        }
    }
}
// Ecoute le bouton play du lecteur
btnPlayPause.addEventListener('click', clickPlayPauseBtnLecteur, false);
lastbtn = btnPlay[0];



// Permet de changer le logo [Play & Pause]
function playPause_Icons(element, bool) {
    // True = PLAY LOGO | False = PAUSE LOGO
    if (bool) {
        element.classList.add("mdi-play-circle-outline");
        element.classList.remove("mdi-pause-circle-outline");
    }
    else {
        element.classList.add("mdi-pause-circle-outline");
        element.classList.remove("mdi-play-circle-outline");
    }
}

// Change l'url du lecteur et celui du button play/pause (du lecteur) 
function change(url) {
    player.setAttribute("src", url);
    btnPlayPause.setAttribute("url", url);
    readTags(url);
}


// Lis les tags ID3 du fichier MP3
function readTags(path) {
    ID3.loadTags(path, function () {
        var tags = ID3.getAllTags(path);
        mp3Infos.innerText = tags.title + " - " + tags.artist;
    });
}

// onload (Lis les Tags du fichier MP3 actuel)
readTags(player.getAttribute("src"));

// Volume 
volume.addEventListener("input", function () { player.volume = (volume.value / 100); }, false);

// Avancement (Slider)
containerProgress.addEventListener('click', function (e) {
    progress.style.width = e.offsetX + "px";
    var pct = Math.floor((e.offsetX / containerProgress.offsetWidth) * 100);
    sliderAvancement(pct);
    progress.innerHTML = pct + " %";
}, false);

// Changer l'avancement dans la musique 
function sliderAvancement(time) {
    var seconds = player.duration * (time / 100);
    player.currentTime = seconds;
    if (player.paused) {
        player.play();
    }
}