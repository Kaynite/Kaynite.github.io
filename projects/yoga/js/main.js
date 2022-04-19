const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-menu");


burger.onclick = function () {
    nav.classList.toggle("open");
    burger.classList.toggle("toggle");
}


window.onscroll = function() {
    if (window.scrollY >= 400) {
        document.getElementById("to-top").style.bottom = "20px";
    } else {
        document.getElementById("to-top").style.bottom = "-100px";
    }
};
