(function ($) {
  "use strict";

  $(window).on("load", function () {
    /*Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    // Sticky Nav
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
    jQuery("#clock").countdown("2022/7/29 11:00 AM", function (event) {
      if (
        event.offset.days === 0 &&
        event.offset.hours === 0 &&
        event.offset.minutes === 0 &&
        event.offset.seconds === 0
      ) {
        var $this = jQuery(this).html(
          `<div style="display: flex; align-items: center; justify-content: center;"><div class="banner-btn">
          <a style="background: linear-gradient(92.13deg, #301659 0%, rgba(87, 25, 176, 0.954167) 57.29%, rgba(103, 68, 148, 0.92) 100%);" href="https://docs.google.com/document/d/16gRmb0QIhB7D-3p7eyMHl_eiLIZgBwWBcRdlOPtmFIU/edit#heading=h.jr9ys29wudc8"
            target="_blank" class="btn btn-common">Problem Statement</a>
        </div></div>`
        );
      } else {
        var $this = jQuery(this).html(
          event.strftime(
            "" +
              '<div class="time-entry days"><span>%-D</span> <b>:</b> Days</div> ' +
              '<div class="time-entry hours"><span>%H</span> <b>:</b> Hours</div> ' +
              '<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> ' +
              '<div class="time-entry seconds"><span>%S</span> Seconds</div> ' +
              '<p style="color: #fff; display: inline-block;"><b>29th july. Live from 11:00 AM</b></p>'
          )
        );
      }
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
      if ($(window).width() <= 768) {
        $(".navbar-collapse a").on("click", function () {
          $(".navbar-collapse").collapse("hide");
        });
      } else {
        $(".navbar .navbar-inverse a").off("click");
      }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $(".lightbox").nivoLightbox({
      effect: "fadeScale",
      keyboardNav: true,
    });

    // one page navigation
    $(".navbar-nav").onePageNav({
      currentClass: "active",
    });

    /* Counter
    ========================================================*/
    $(".counterUp").counterUp({
      delay: 10,
      time: 1500,
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });

    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });
})(jQuery);
