/*
Author       : Bhagyashree M.
*/
(function ($) {
    "use strict";
    $(document).on('ready', function () {  
// function to display(open) modal on click
  $(".memberlist li").click(function() {

    var current = $('.active');
    $(current).removeClass("active");
    $(this).addClass("active");

    var h5 = $(".active h5").text();
    var src = $(".active img").attr("src");
    var span = $(".active .subheadingOne").text();

    $(".teamModal h5").text(h5);
    $(".teamModal img").attr("src", src);
    $(".teamModal .subheadingOne").text(span);

    $(".teamModal").css("display","block");
  });

  //  function to close modal on click
  $(".closeModal").click(function() {
    $(".teamModal").css("display","none");
  });
        
  $(".teamModal").on('mouseleave',function(e) {
    $(".teamModal").css("display","none");
  });
});
}(jQuery));