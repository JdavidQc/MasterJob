(function () {

    'use strict';
    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


    $(".contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top
        }, 1000);
    });  $(".nosotrs").click(function() {
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });
    $(".politica").click(function() {
        $('html, body').animate({
            scrollTop: $("#politicas").offset().top
        }, 1000);
    }); $(".inicio").click(function() {
        $('html, body').animate({
            scrollTop: $("#gtco-main-nav").offset().top
        }, 1000);
    }); $(".cur").click(function() {
        $('html, body').animate({
            scrollTop: $("#curso").offset().top
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(window).width() > 834) {
           if ($(this).scrollTop() > 400) {
              $('.arriba').fadeIn('slow');
           } else {
              $('.arriba').fadeOut('slow');
           }
        } else {
           $('.arriba').fadeOut('slow');
        }
        if ($(window).scrollTop() >= 150) {
           $.each($(".habilidad"), function (i, item) {
              $(item).animate({
                 opacity: 1
              }, 300);
           })
  
        }
     });
     $(".arriba").click(function () {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 1000);
     });
}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}
