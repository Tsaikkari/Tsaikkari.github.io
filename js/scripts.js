$(document).ready(function() {
  // Smooth scrolling
    const $root = $('html, body');
    $('.navbar a:not(.dropdown-toggle)').click(function() {
    let href = $.attr(this, 'href');
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
      $("#work").append(`
        <di v class='col-lg-4 col-md-6 col-mb-4 card-wrapper'>
          <div class='card h-100'>
          <img class='card-img-top' src='${works[i].pic}'>
          <div class='card-body'>
          <h4 class='card-title'>${works[i].title}</h4>
          <p class='card-text'>${works[i].description}</p>
        </div>
        <div class='card-footer'>
          <a href='${works[i].href}' class='btn btn-dark'>Go to App</a>
        </div>
      `);
      works[i].href === "https://ninetynineshadesofgrey.herokuapp.com/" && $('.btn').text('Work in Progress!');
    };
    return false;
  });

  document.getElementById("copyright").innerHTML = new Date().getFullYear();