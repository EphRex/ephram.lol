function audio() {
    var audioElement = document.getElementById("audio");
    audioElement.volume = 0.2;
    audioElement.play();
}

function video() {
    var videoElement = document.getElementById("video");
    videoElement.play();
}

video();

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

let counter = 0;
let Title = 'phram';
let direction = true;

let aniTitle = setInterval(function () {
    if (counter === Title.length) direction = false;
    if (counter === 0) direction = true;
    counter = direction ? ++counter : --counter;
    let newTitle = counter === 0 ? "" : Title.slice(0, counter);
    document.title = 'E' + newTitle;
}, 400);

window.oncontextmenu = function () {
    return false;
};

$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});
