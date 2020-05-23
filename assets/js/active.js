/*
Author       : EnvyTheme
Template Name: AutoServicing
Version      : 1.1
*/
(function ($) {
    "use strict";
    $(document).on('ready', function () {
        // MENU JS
        $(window).on('scroll', function () {
            if ($(this).scrollTop() < 55) {
                $('.main-menu-area').removeClass('affix');
                $('.main-menu-area').addClass('affix-top');
            } else {
                $('.main-menu-area').removeClass('affix-top');
                $('.main-menu-area').addClass('affix');
            }
        });			

        // Check distance to top and display back-to-top.
        jQuery(window).on('scroll', function() {
            if ( $( this ).scrollTop() > 400 ) {
                $('.back-to-top').addClass( 'show-back-to-top' );
            } else {
                $('.back-to-top').removeClass( 'show-back-to-top' );
            }
        });

        // Click event to scroll to top.
        jQuery('.back-to-top').on('click', function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400, 'swing');
            return false;
        });
    });

    // Preloader
    jQuery(window).on('load',function(){
        jQuery(".site-preloader-wrap").fadeOut(500);
    });

}(jQuery));