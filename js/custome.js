$(document).ready(function () {
  $(".banner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-up"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-down"></i></button>',
    // vertical: true,
    // verticalSwiping: true,
    fade: true,
  });
});
