//Kamilla JS start

let slideIndex = 0;
showSlides();

function showSlides() {
  let x;
  let slides = document.getElementsByClassName("carouselSlides");
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}

const hour = new Date().getHours();
let greeting;

if (hour < 12){
    greeting = "Godmorgen, velkommen til Wiser";
}
else if (hour < 14){
    greeting = "Godmiddag, velkommen til Wiser";
}
else if (hour < 18){
    greeting = "God-eftermiddag, velkommen til Wiser"
}
else {
    greeting = "Godaften, velkommen til Wiser";
}
document.getElementById("hejwiser").innerHTML = greeting;

let array = ["Det er nemt at få el-installationer optimeret i dit hjem.", "Hvad end du bor i hus eller i lejlighed,bygger nyt eller om", "<br>", "så tilbyder vi masser af muligheder og løsninger, der skaber mere smarte og bæredygtige hjem.", "<br>", "Det gør både din hverdag nemmere og vores allesammens verden grønnere"]
function printArray(){
    let p = document.getElementById('middletexthome');

    for (i = 0; i < array.length; i++)
    p.innerHTML += array[i];
}

document.getElementById("middle-text").addEventListener("click", function(){
  alert("Dette er desværre ikke en knap, rul længere ned ad siden og læs mere");
});
//Kamilla JS slut