//Cecilie JS start
  
  //variablerne er defineret herunder - hentet fra DOM
  let burgerMenu = document.getElementById('burgermenu');
  let overlay = document.getElementById('menu');

  //clickfunktion på burgermenuen er aktiveret via et event og en funktion starter
  burgerMenu.addEventListener('click',function(){
    //toggle er en skifte-funktion, som bruges til at skjule og vise de valgte elementer - her både "close" og "overlay"
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
//Cecilie JS slut

//Kamilla JS start

let slideIndex = 0;
showSlides();

function showSlides() {
  let x;
  let slides = document.getElementsByClassName("carouselSlides");
  let dots = document.getElementsByClassName("prik");
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}

