// CounterUp Script
$(".counter").counterUp({
    delay: 10,
    time: 1000
});

// Wow Library Initialization Code
new WOW().init();

const slider = document.querySelector(".testi-slides"),
    slidesNumber = document.querySelector(".testi-slides").children.length;
var currentSlide = 1;

let nextButton = document.getElementById("testi-slider-next");
let prevButton = document.getElementById("testi-slider-prev");

console.log(slider.children[0], slidesNumber);

nextButton.onclick = function () {
    currentSlide++;
    if (currentSlide > slidesNumber) {
        currentSlide = 1;
        console.log("ggg");
    } else {
        console.log("hu");
    }
    slider.children[currentSlide - 1].classList.add("active");

    for (let i = 1; i <= slidesNumber; i++) {
        if (i !== currentSlide) {
            slider.children[i - 1].classList.remove("active");
        }
    }
};

prevButton.onclick = function () {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = slidesNumber;
    } else {
    }
    slider.children[currentSlide - 1].classList.add("active");

    for (let i = 1; i <= slidesNumber; i++) {
        if (i !== currentSlide) {
            slider.children[i - 1].classList.remove("active");
        }
    }
};


let hearts = document.querySelectorAll(".heart");

let nnn = Array.from(hearts);

console.log(nnn);

nnn.forEach(element => {
    element.onclick = function() {
        element.classList.toggle("liked");
    }
});


