//Åpner LB
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Lukker LB
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

//starter ved første bilde
let slideIndex = 1;
//bruker første bilde som funksjonsparameter og viser det
showSlides(slideIndex);

//pilknapper fram/tilbake
function plussSlides(n) {
    //vil være enten +1 eller -1 avhengig av hvilken knapp man trykker på
    showSlides(slideIndex +=n)
}

function currentSlide(n) {
    //henter verdi fra hvilket bilde man klikker på
    showSlides(slideIndex =n)
}

//Navigasjon inne på LB
function showSlides(n) {
    let i;
    //store bilder i LB
    let slides = document.getElementsByClassName("mySlides");
    //thumbnails inne i LB
    let dots = document.getElementsByClassName("demo");
    //bildetekst
    let captionText = document.getElementById("caption");

    //setter tilbake til første bilde når bruker har bladd gjennom alle
    //Når du blar for langt så blir det bildet som kommer opp det første bildet.
    if(n > slides.length) {
        slideIndex = 1;
    }

    //setter tilbake til siste bilde når bruker har bladd tilbake
    //Når du blar minre en det finnes bilder så blir bildet satt til å være det borteste
    if(n < 1) {
        slideIndex = slides.length;
    }

    //setter opp løkker for å vise bilder korrekt
    // Gjemmer de andre bildene, altså de bildene som ikke har blitt klikket på. Dette er de store bildene.
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    //vise korrekt bilde med tilhørende tekst. Må ha -1 for å få riktig bilde.
    //Gjør om bildene til block display. at den skal vises. 
    slides[slideIndex-1].style.display = "block";
    //bestemmer hvem som skal være hovedbilde i modalen
    dots[slideIndex-1].className += " active";
    //Henter texten som står i alt på hvert bilde og deretter legger det inn i captiontext
    captionText.innerHTML = dots[slideIndex-1].alt;
}
