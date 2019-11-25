//  document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     $('.sidenav').sidenav();
//     $(".dropdown-trigger").dropdown();
//   });

//   // Or with jQuery

  
    
  (function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      var instance = M.Carousel.init({
        fullWidth: true,
        indicators: true
      });
    
      // Or with jQuery
    
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    }); // end of document ready
    
  })(jQuery); // end of jQuery name space
  
  