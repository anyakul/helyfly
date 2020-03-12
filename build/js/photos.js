var slides = document.querySelectorAll(".map__info-item");
var dots = document.querySelectorAll(".map__info-button-toggle");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = slides[i].classList.replace("map__info-item--active", "map__info-item--not-active");
  }
  /*for (i = 0; i < dots.length; i++) {
  dots[i].classList = dots[i].classList.replace("map__info-item--active", "map__info-item--not-active");
  }*/
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += "  map__info-button-toggle--active";
}


console.log(slides);
console.log(dots);