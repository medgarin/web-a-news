$(document).ready(function() {
  var nav = $("nav");
  var menu_top = nav.offset();
  $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_top.top) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  });
   $('nav li').hover(function () {    
        $('ul', this).stop(true, true).slideDown(200);
    }, function () {        
        $('ul', this).stop(true, true).delay(100).slideUp(100);
    });
});