


/* TAB BG Animation*/
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 3000,
    delay: 500,

    easing: 'easeInOutSine',
    autoplay: true
  });
}


/*Extra page window close */
$('#close-logo').click(function(){
  window.close();
});



   
/**************************************/
/***********Mobile Navigation**********/
/**************************************/
    

  

$(document).ready(function(){
  $(".navbar-content").animate({
      top: '-30px',
      opacity:"1"
  }, 1600, 'easeOutQuad');
});


/*Mobile View Menu Close Button*/
$('.closebtn').click(function(){
  document.getElementById("myNav").style.width = "0%";
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
  


    
$(document).ready(function(){
  
   $("#img-about-me").delay(3800).animate({
        top: '-30px',
        opacity:"1"
    }, 1600, 'easeOutQuad');
  
  
    $(".h1-about-me").delay(4500).animate({
        top: '-30px',
        opacity:"1"
    }, 1600, 'easeOutQuad');
  
  
    $(".h3-about-me").delay(4800).animate({
        top: '-30px',
        opacity:"1"
    }, 1600, 'easeOutQuad');
    
  
    $(".navbar").delay(4500).animate({
        top: '-30px',
        opacity:"1"
    }, 1600, 'easeOutQuad');


    $(".intro").delay(3800).animate({
        top: '23%',
        opacity:"1"
    }, 1600, 'easeOutQuad');
  });
  

/**************************************************/
/***********Scroll Show Project Animation**********/
/**************************************************/


$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.row').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object - 150 ){
              
              $(this).find( '.img-project' ).animate({
                  top: '-30px',
                  opacity:"1"
              }, 1600, 'easeOutQuad');

              $(this).find( '.text-project' ).delay(600).animate({
                  top: '-30px',
                  opacity:"1"
              }, 1600, 'easeOutQuad');
          }  
      }); 
  });
  
});







/**************************************************/
/***********Scroll Show Project Animation**********/
/**************************************************/


$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.row').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object - 150 ){
              
              $(this).find( '.img-project' ).animate({
                  top: '-30px',
                  opacity:"1"
              }, 1600, 'easeOutQuad');

              $(this).find( '.text-project' ).delay(600).animate({
                  top: '-30px',
                  opacity:"1"
              }, 1600, 'easeOutQuad');

          }
          
      }); 




  
  });
  
});
