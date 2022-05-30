// Baggrundsbilleder til simulatoren:
function changeImagei() {
    const image = document.getElementById('myImagei');
    if (image.src.match("lysmedtekst.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/lysmedtekst.svg";
    }
}

function changeImagea() {
    const image = document.getElementById('myImagei');
    if (image.src.match("vandogtekst.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/vandogtekst.svg";
    }
}

function changeImageb() {
    const image = document.getElementById('myImagei');
    if (image.src.match("rogalarmmedtekstgtgt.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/rogalarmmedtekstgtgt.svg";
    }
}

function changeImagec() {
    const image = document.getElementById('myImagei');
    if (image.src.match("sensorogtekst.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/sensorogtekst.svg";
    }
}

// knapper til simulator:
// knap til lys - billedskift:
const closedTn = document.querySelector(".closedTn");
const openTn = document.querySelector(".openTn");

closedTn.addEventListener("click", () => { //mouseover kunne også være click //
    if (openTn.classList.contains("openTn")) {
        openTn.classList.add("activeTn");
        closedTn.classList.remove("activeTn");
    }
});

openTn.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedTn.classList.contains("closedTn")) {
        closedTn.classList.add("activeTn");
        openTn.classList.remove("activeTn");
    }
});

// knap til vand - billedskift:
const closedTi = document.querySelector(".closedTi");
const openTi = document.querySelector(".openTi");

closedTi.addEventListener("click", () => { //mouseover kunne også være click //
    if (openTi.classList.contains("openTi")) {
        openTi.classList.add("activeTi");
        closedTi.classList.remove("activeTi");
    }
});

openTi.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedTi.classList.contains("closedTi")) {
        closedTi.classList.add("activeTi");
        openTi.classList.remove("activeTi");
    }
});

// knap til roegalarm - billedskift:
const closedTa = document.querySelector(".closedTa");
const openTa = document.querySelector(".openTa");

closedTa.addEventListener("click", () => { //mouseover kunne også være click //
    if (openTa.classList.contains("openTa")) {
        openTa.classList.add("activeTa");
        closedTa.classList.remove("activeTa");
    }
});

openTa.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedTa.classList.contains("closedTa")) {
        closedTa.classList.add("activeTa");
        openTa.classList.remove("activeTa");
    }
});

// knap til doer - billedskift:
const closedTb = document.querySelector(".closedTb");
const openTb = document.querySelector(".openTb");

closedTb.addEventListener("click", () => { //mouseover kunne også være click //
    if (openTb.classList.contains("openTb")) {
        openTb.classList.add("activeTb");
        closedTb.classList.remove("activeTb");
    }
});

openTb.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedTb.classList.contains("closedTb")) {
        closedTb.classList.add("activeTb");
        openTb.classList.remove("activeTb");
    }
});

//loop, overskriften til produktkataloget:
const overskriftProdukter = {virksomhed:"Lauritz Knudsen", Schneider:"By Schneider Elektric -", produktserie:"Wiser-SmartHome"}; 

let vilSe = "<b>";
for (let x in overskriftProdukter) {
  vilSe += overskriftProdukter[x] + " ";
}
document.getElementById("tilbyder").innerHTML = vilSe;

// array overskrifterne i tekstbokse:
const overSkrifter = ["Wiser Smart-Home APP", "Wiser Smart-Home røgalarm", "Kontakt Wiser Elektrikker", "Wiser Smart-Home hele pakken", "Bliv smart med Wiser og spar husstands CO2-aftryk", "Der er penge at spare med Wiser", "Produkter"];

document.getElementById("over1").innerHTML = overSkrifter[0];
document.getElementById("over2").innerHTML =overSkrifter[1];
document.getElementById("over3").innerHTML =overSkrifter[2];
document.getElementById("over4").innerHTML = overSkrifter[3];
document.getElementById("over5").innerHTML = overSkrifter[4];
document.getElementById("over6").innerHTML = overSkrifter[5];
document.getElementById("over7").innerHTML = overSkrifter[6];


// for loop af array, indeholder vores produktliste:
const produkter = ["Lysstyring", "Røgalarm", "Vand sensor", "Dør Sensor", "Vindues sensor", "Stikkontakter"];

let text = "";
for (let i = 0; i < produkter.length; i++) {
  text += produkter[i] + " ";
}

document.getElementById("produktliste").innerHTML = text;

// Beskrivelse omking åbningstider i bunden af siden:
const aabent = new Date().getHours(); 
let oplysOmAabent;

if (aabent > 16) {
  oplysOmAabent = "Buttiken er desværre lukket nu, men support sidder klar med at hjælpe til kl 20.00";
}
else if (aabent > 09) {
    oplysOmAabent = "Hej og velkommen til Wiser Smart Home produktseries hjemmeside, <br> hvis du har brug for hjælp er du velkommen til at henvende dig i butikken eller kontakte support"; 
}
else {
  oplysOmAabent = "Vi er desværre lukket og det vil først være muligt at komme i kontakt i morgen kl 09.";
}

document.getElementById("aabent").innerHTML = oplysOmAabent;

// Stiling af nogle af de elementer skrevet i JS:
const stileElementer = document.querySelectorAll(".stilingen");
for (let i = 0; i < stileElementer.length; i++) {
  stileElementer[i].style.color = "#3DCD58";
  stileElementer[i].style.fontSize = "20px";
  stileElementer[i].style.fontWeight = "bold";
  stileElementer[i].style.textAlign = "center";
  stileElementer[i].style.marginBottom = "1px";
  stileElementer[i].style.marginTop = "1px";

}

const stileElementerOver = document.querySelectorAll(".stilingenover");
for (let i = 0; i < stileElementerOver.length; i++) {
  stileElementerOver[i].style.color = "#3DCD58";
  stileElementerOver[i].style.fontSize = "50px";
  stileElementerOver[i].style.fontWeight = "bold";
  stileElementerOver[i].style.textAlign = "center";
  stileElementerOver[i].style.marginBottom = "3%";
  stileElementerOver[i].style.marginTop = "3%";
}


  