$(document).ready(function() {
  // Smooth scrolling
    var $root = $('html, body');
    $('.navbar a:not(.dropdown-toggle)').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
        });
      };
    });

    //work section
      for(var i = 0; i < works.length; ++i) {
        $("#work").append("\
        <div class='col-xs-12 col-sm-6'>\
        <a href='" + works[i].href + "' class='work-img'>\
        <img class='img-fluid' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'></p>" + works[i].title + "</span>\
        </a>\
        </div>\
      ");

      var images = $("#work img");
      if(i%2 === 0){
        $(images[i]).css("border", "1px solid #19cbd0");
      } else {
        $(images[i]).css("border", "1px solid  #1aa8db");
      };

      var texts = $(".info");
      if(i%2 === 0) {
        $(texts[i]).css({"color": "gold", "top": "6rem", "left": "7.8rem"}); 
      } else {
        $(texts[i]).css({"color": "#ff80ed", "top": "2.5rem", "left": "0.5rem"});
      }
    };
      $(".work-img").mouseenter(function() {
        $(".info", this).show();
      }).mouseleave(function() {
        $(".info", this).hide();
      });
      return false;
  });
