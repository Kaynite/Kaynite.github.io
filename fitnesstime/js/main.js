// Slick Slider Initializer
$(document).ready(function(){
    if (window.innerWidth < 800) {
        slideShowImages = 2
    } else {
        slideShowImages = 4
    }
    $('.customer-logos').slick({
        slidesToShow: slideShowImages,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});


$(".nav-item").hover(function() {
    $(this).addClass("active").siblings().removeClass("active");
}, function() {
    $(this).removeClass("active");
    $(".nav-item:first-of-type").addClass("active");
})


window.onscroll = function() {
    if (window.scrollY >= 400) {
        document.getElementById("to-top").style.bottom = "20px";
    } else {
        document.getElementById("to-top").style.bottom = "-100px";
    }
};
