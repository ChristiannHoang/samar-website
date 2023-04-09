// CALL WOW 
new WOW().init();

// CALL COUNT UP 
$('.counter').countUp();

// FANCY BOX
Fancybox.bind('[data-fancybox="work__gallery"]', {
    // Your custom options
});

// OWL CAROUSEL
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// BACK TO TOP JS 
var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 1200;