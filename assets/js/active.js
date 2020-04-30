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
            if ($(this).scrollTop() > 100) {
                $('.main-menu-area-two').addClass('menu-shrink');
            } else {
                $('.main-menu-area-two').removeClass('menu-shrink');
            }
        });			

        // Check distance to top and display back-to-top.
        jQuery( window ).on('scroll', function() {
            if ( $( this ).scrollTop() > 800 ) {
                $( '.back-to-top' ).addClass( 'show-back-to-top' );
            } else {
                $( '.back-to-top' ).removeClass( 'show-back-to-top' );
            }
        });

        // Click event to scroll to top.
        jQuery( '.back-to-top' ).on('click', function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
            return false;
        });
    });

    // Preloader
    jQuery(window).on('load',function(){
        jQuery(".site-preloader-wrap").fadeOut(500);
    });

}(jQuery));