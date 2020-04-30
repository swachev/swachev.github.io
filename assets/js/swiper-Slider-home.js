(function ($) {
    "use strict";
    $(document).on('ready', function () {
        // Home page Banner Slider
        var swiper1 = new Swiper('.swiper1', {
            speed:8000,
		        direction: 'horizontal',
            keyboard: {
              enabled: true,
              onlyInViewport: false,
            },
            mousewheel: {
              invert: true,
            },
            autoplay: {
              delay: 5000,
            },
            pagination: '.swiper-pagination1',
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            spaceBetween: 0,
            effect: 'coverflow',
            loop: true          
        });
        
        $('.swiper1').on('mouseenter', function(e){
            swiper1.stopAutoplay();
        });
        
        $('.content-block-area').on('mouseenter', function(e){
            swiper1.stopAutoplay();
        });
        
			  $('.swiper1').on('mouseleave', function(e){
            swiper1.startAutoplay();
        });
        
        $(window).on("scroll", function() {
            console.log($(window).scrollTop());
            if($(window).scrollTop() < 50) {
               swiper1.startAutoplay();
               mouseenter.start
            }
            if($(window).scrollTop() > 50) {
               swiper1.stopAutoplay(); 
            }
        });
			});
}(jQuery));