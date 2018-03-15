$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        center: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        rewind: false
    });
    $('.owl-stage-outer').mouseleave(function () {
        owl.trigger('play.owl.autoplay', [1500])
    });
});
