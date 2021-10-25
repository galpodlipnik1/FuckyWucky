function audio() {
    var audio = new Audio("opsie.mp3");

    audio.oncanplaythrough = function(){
        audio.play();
    }

    audio.loop = false;

    audio.onended = function(){
    audio.play();
    }
}