const typedText = document.getElementById('typed-text');
const text = typedText.textContent; 

let i = 0; 

function typeWriter() {
  if (i < text.length) {
    typedText.textContent = text.slice(0, i + 1); 
    i++;
    setTimeout(typeWriter, 50); 
  } else {
  }
}

typeWriter(); 
$(document).ready(function(){
  $('.slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      
      navLinks.forEach(function (link) {
        link.classList.remove("text-shadow");
      });

      
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

     
      this.classList.add("text-shadow");

      
      this.classList.add("active");
    });
  });


  var path = window.location.pathname;
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});

var carousel = new bootstrap.Carousel(document.getElementById("carouselExampleControls"), {
  interval: 2000, 
  wrap: true, 
});