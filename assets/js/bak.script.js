
btnChangeMP3 = document.getElementById("mp3-change"),

btnPlay.forEach(element => {
    element.addEventListener("click", clickPlayPauseList, false);
});
var url = "";
var last_url = "";
var cur_id = "";
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
}
else // Si player en lecture alors pause
{
    // Compare l'url du bouton et celui en cours dans le lecteur (Si pas les mêmes changer l'url du lecteur par la nouvelle reçu puis relancer automatiquement la lecture)
    if (last_url !== url) {
        url = last_url;
        change(last_url);
        player.play();
        lastbtn = this;
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