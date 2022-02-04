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
