var audio = new Audio("opsie.mp3");

audio.oncanplaythrough = function () {
    audio.play();
}

audio.loop = true;

audio.onended = function () {
    audio.play();
}

function audio() {
    var audio = new Audio("opsie.mp3");

    audio.oncanplaythrough = function () {
        audio.play();
    }

    audio.loop = true;

    audio.onended = function () {
        audio.play();
    }
}
