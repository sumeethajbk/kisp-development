jQuery(document).ready(function () {

    /* Logo Slider */
  var windowWidth = jQuery(window).width();
  function introSlider() {
    var $tvslider = jQuery('.logo-slider-row');
    var tvslideCount = $tvslider.children().length;
    if (windowWidth >= 1024) {
      if (tvslideCount > 3) {
        $tvslider.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 5000,
          dots: false,
          arrows: false,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: 'linear',
        });
      }
    } else {
      $tvslider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
          speed: 5000,
          dots: false,
          arrows: false,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: 'linear',
      });
    }
  }
  introSlider();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      introSlider();

    }
  });
/* End of logo slider */
    
/* Testimonial Slider */
    jQuery(".testimonial-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 100,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: true,
        adaptiveHeight:true,
      fade:true,
        prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-left"></i></span></div>',
    nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-right"></i></span></div>',
    });
});
