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
        $(images[i]).css("border", "");
      } else {
        $(images[i]).css("border-bottom", "solid 4px #000");
      };

      var texts = $(".info");
      if(i%2 === 0) {
        $(texts[i]).css("color", "#ff80ed");
      } else {
        $(texts[i]).css("color", "#000"); 
      }
    };
      $(".work-img").mouseenter(function() {
        $(".info", this).show();
      }).mouseleave(function() {
        $(".info", this).hide();
      });
      return false;
  });
