var files = [
    "./images/Page01.jpg",
    "./images/Page02.jpg",
    "./images/Page03.jpg",
    "./images/Page04.jpg",
    "./images/Page05.jpg",
    "./images/Page06.jpg",
    "./images/Page07.jpg",
    "./images/Page08.jpg",
    "./images/Page09.jpg"
];

var currentPage = 0;

function OnNextPageClick() {
    PlayFlipSound();

    if (currentPage == 0)
        document.getElementById("frontPage").style.animation = "flipLeftAnimation 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)";
    else
        document.getElementById("backPage").style.animation = "flipLeftAnimation 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)";

    setTimeout(function () {
        currentPage += 2;

        CheckVisibility();

        if (currentPage == 0)
            document.getElementById("frontPage").style.animation = "none";
        else
            document.getElementById("backPage").style.animation = "none";
    }, 800);
}

function OnPreviousPageClick() {
    PlayFlipSound();

    document.getElementById("frontPage").style.animation = "flipRightAnimation 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)";

    setTimeout(function () {
        currentPage -= 2;

        CheckVisibility();

        document.getElementById("frontPage").style.animation = "none";
    }, 800);
}

function OnHomePageClick() {
    PlayFlipSound();

    currentPage = 0;

    document.getElementById("frontPage").children[0].src = files[currentPage];

    CheckVisibility();
}

function CheckVisibility() {
    if (currentPage == 0) {
        document.getElementById("frontPage").children[0].src = files[currentPage];

        document.getElementById("leftIcon").style.visibility = "hidden";
    } else {
        document.getElementById("leftIcon").style.visibility = "visible";
        document.getElementById("rightIcon").style.visibility = "visible";

        document.getElementById("frontPage").children[0].src = files[currentPage - 1];
        document.getElementById("backPage").children[0].src = files[currentPage];
    }

    if (currentPage == files.length - 1) {
        document.getElementById("backPage").style.display = "none";

        document.getElementById("rightIcon").style.visibility = "hidden";
    }

    if (currentPage <= 0)
        currentPage = 0;

    if (currentPage == 0)
        document.getElementById("backPage").style.display = "none";
    else
        document.getElementById("backPage").style.display = "block";
}

function PlayFlipSound() {
    var audio = new Audio('./audio/flipSound.mp3');
    audio.play();
}