$(window).scroll(function () {
  var scrl = $(window).scrollTop();
  if (scrl < 60) {
    $(".header-01").removeClass("fixedbar");
  } else {
    $(".header-01").addClass("fixedbar");
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");
  
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

$('.anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false,
  fixedBgPos:true,
  overflowY: 'auto',
  closeBtnInside: true,
  perloader: false,
  midCLick: true,
  removeDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
})



$(document).ready(function(){
  $("#back2Top").click(function(event){
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0}, "slow");
      return false;
  });
});


$(function(){
  $('a.smooth-scroll').click(function(event){
      event.preventDefault();
      var section = $(this).attr("href");
      
      $('html,body').animate({
          scrollTop: $(section).offset().top - 64
      }, 1250, "easeInOutExpo");
  });
});


$(window).scroll(function(){
  var height = $(window).scrollTop();
  if(height > 100){
      $('#back2Top').fadeIn();
  }
  else{
      $('#back2Top').fadeOut();
  }
});



new WOW().init();