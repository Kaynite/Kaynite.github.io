// CounterUp Script
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Wow Library Initialization Code
new WOW().init();

window.onresize = function() {
    console.log(window.innerWidth);
}
