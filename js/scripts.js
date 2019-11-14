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
        <div class='col-xs-12 col-sm-6 col-md-4'>\
          <a href='" + works[i].href + "' class='work-pic'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'></p>" + works[i].title + "</span>\
          </a>\
        </div>\
      ");
      var images = $("#work img");
      if(i%2 === 0){
        $(images[i]).css("border", "2px solid #2b2b45");
      } else {
        $(images[i]).css("border", "2px solid #19cbd0");
      };
    };
      $(".work-pic").mouseenter(function() {
        $(".info", this).show();
      }).mouseleave(function() {
        $(".info", this).hide();
      });
      return false; 
  });
