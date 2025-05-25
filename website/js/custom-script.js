jQuery(document).ready(function () {
  /* Fixed Header */
  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 2) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });

  /* Menu */

  if (jQuery(window).width() <= 809) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
      jQuery("html").toggleClass("no-scroll");
    });
    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).next('ul.sub-menu').slideToggle();
      jQuery(this).parent().siblings().toggleClass('sib');
    });
    jQuery("ul.main_menu ul > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery('ul.main_menu ul > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).siblings('ul.main_menu ul > li > ul.sub-menu').slideToggle();
    });
  }


  /* Accorrdion */
  jQuery(".accordion-item .accordion-heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("slow");
  });


  /* Product Banner */
  if (jQuery(window).width() >= 1024) {
  jQuery(".pb-slider-wrap").each(function () {
    const $wrap = jQuery(this);
    $wrap.find(".pb-thumb:first").addClass("active")
         .find(".pb-thumb-nav").addClass("open");
    $wrap.find(".pb-slide:first").addClass("active");
    $wrap.find(".pb-thumb-nav").on("click", function (e) {
      e.preventDefault();
      const $nav = jQuery(this);
      const data = $nav.data("name");

      $nav.parent().addClass("active").siblings().removeClass("active")
          .find(".pb-thumb-nav").removeClass("open");
      $nav.addClass("open");
      $wrap.find(".pb-slide").hide()
           .filter(`[data-image="${data}"]`).fadeIn(800);
    });
  });
}

/* Product Features */
  if (jQuery(window).width() >= 1024) {
  jQuery(".pf-slider-wrap").each(function () {
    const $wrap = jQuery(this);
    $wrap.find(".pf-thumb:first").addClass("active")
         .find(".pf-thumb-nav").addClass("open");
    $wrap.find(".pf-slide:first").addClass("active");
    $wrap.find(".pf-thumb-nav").on("click", function (e) {
      e.preventDefault();
      const $nav = jQuery(this);
      const data = $nav.data("name");

      $nav.parent().addClass("active").siblings().removeClass("active")
          .find(".pf-thumb-nav").removeClass("open");
      $nav.addClass("open");
      $wrap.find(".pf-slide").hide()
           .filter(`[data-image="${data}"]`).fadeIn(800);
    });
  });
}

});


