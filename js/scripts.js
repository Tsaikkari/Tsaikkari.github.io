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
  
  // Tooltips
    $(function () {
    $('#item1').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
    });
  
    // Textarea background
    $('#button').on('click', function() {
        console.log('clicked');
      var comment = $('.message-box').val();
        console.log(comment);
      if(comment === "") {
        $('.message-box').css('border', '2px solid red');
      } else {
        $('#visible-comment').html(comment);
        $('.message-box').hide();
          console.log(comment);
      }
    });
  
    //$('#message-box').css('background-color', '#FFF3F3');
  
  
    $('.message-box').on('keyup', function() {
      console.log('keyup happened'); // making sure that the keyup works
      var howMany = 3;
      var howLong = "string"
      var charCount = $('.message-box').val().length; // here we set the length of the contenct of the textarea to a variable
        console.log(charCount); // making sure it's set to the right value
      $('#char-count').html(charCount); //showing a running character count to the user
      if(charCount > 50) {
        $('#char-count').css('color', 'red');
      } else { $('#char-count').css('color', 'black');
      };
    });
  
    //work section
      for(var i = 0; i < works.length; ++i) {
        $("#works").append("\
        <div class='col-xs-12 col-sm-12 col-md-12' id='work-pic'>\
          <a href='" + works[i].href + "' class='work-img'>\
          <img class='img-fluid responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'></p>" + works[i].title + "</span>\
          </a>\
        </div>\
      ");
      var images = $("#works img");
      if(i%2 === 0){
        $(images[i]).css("border", "");
      } else {
        $(images[i]).css("border", "5px solid #e7472e");
      };
    };
      $(".work-img").mouseenter(function() {
        $(".info", this).show();
      }).mouseleave(function() {
        $(".info", this).hide();
      });
      return false;
  });
  
  // Bing Map
  //function GetMap() {
     //called to initialize the map
    //var map = Microsoft.Maps.Map('#map', {
      //center: new Microsoft.Maps.Location(52.517441, 13.390402
      //),
      //mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      //zoom: 15
    //});
  
    // listen to clicks
    //Microsoft.Maps.Events.addHandler(map, 'click', function () { alert('mapClick'); });
  //}