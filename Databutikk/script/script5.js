//* Navigasjon
// Set the width of the sidebar to 250px and the left margin of the page content to 250px
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//* Åpner tilbudsmodalen
const modal1 = document.getElementById("myModal");
let span1 = document.getElementsByClassName("close")[0];

function åpneTilbud(){
    modal1.style.display = "block";
}

function lukkModal(){
    modal1.style.display = "none";
}

/* Åpne handlekurven */
function openBetaling(){
    window.location="../sider/betaling.html"
}

//* Det som ligger på Kontaktsiden

//? Universell utforming
function Universell(){
    let knapp = document.getElementById("universalKnapp")

    if(knapp.checked == true){
        //Størrelse
        document.querySelector("body").style.fontSize = "150%"
        document.getElementById("tilbud").style.fontSize = "110%"
        document.getElementById("bilde").style.fontSize = "40%"

        //Farge
        document.querySelector("header").style.backgroundColor = "#010101"
        document.querySelector("main").style.backgroundColor = "#010101"
        document.querySelector("nav").style.border.bottom = "#717171"
        document.querySelector("nav").style.backgroundColor = "#252525"
        document.querySelector("body").style.color = "#FFFFFF"
        document.querySelector("body").style.backgroundColor = "#010101"
        document.getElementById("handlevogn").style.backgroundColor = "#f1d7c6"
        document.getElementById("handlevogn").style.color = "#000000"
        document.getElementById("meny").style.backgroundColor = "#f1d7c6"
        document.getElementById("meny").style.color = "#000000"
        document.getElementById("mySidebar").style.backgroundColor = "#f1d7c6"
        document.getElementById("link1").style.color = "#FFEA00"
        document.getElementById("link2").style.color = "#FFEA00"

        //Lyd
        document.getElementById("lyd").style.visibility = "visible"
    }

    if (knapp.checked == false){
        // Størrelse
        document.querySelector("body").style.fontSize = "100%"
        document.getElementById("tilbud").style.fontSize = "100%"
        document.getElementById("bilde").style.fontSize = "30%"

        //Farge
        document.querySelector("header").style.backgroundColor = "#fefefe"
        document.querySelector("main").style.backgroundColor = "#fefefe"
        document.querySelector("nav").style.border.bottom = "#8a8a8aa1"
        document.querySelector("nav").style.backgroundColor = "#dadada"
        document.querySelector("body").style.color =  "#000000",
        document.querySelector("body").style.backgroundColor = "#fefefe"
        document.getElementById("handlevogn").style.backgroundColor = "#0e2839"
        document.getElementById("handlevogn").style.color = "#FFFFFF"
        document.getElementById("meny").style.backgroundColor =  "#0e2839"
        document.getElementById("meny").style.color = "#FFFFFF"
        document.getElementById("mySidebar").style.backgroundColor = "#0e2839"
        document.getElementById("link1").style.color = "#0000EE"
        document.getElementById("link2").style.color = "#0000EE"

        //Lyd
        document.getElementById("lyd").style.visibility = "hidden"

    }
}


//? Enkelt utskriftsformat

let bilde1 = document.getElementById("logo").src
let bilde2 = document.getElementById("facebook").src

let bildeTekst1 = logo.getAttribute("alt")
let bildeTekst2 = facebook.getAttribute("alt")

function UtskriftFormat(){
    let knapp = document.getElementById("formatKnapp")
    if(knapp.checked == true){
        document.getElementById("bilde").innerHTML = bildeTekst1
        document.getElementById("fb").innerHTML = bildeTekst2
    }

    if (knapp.checked == false){
        document.getElementById("bilde").innerHTML = ""

        //https://stackoverflow.com/questions/2735881/adding-images-to-an-html-document-with-javascript 
        let img1 = document.createElement("img")
        img1.src = bilde1
        img1.alt = "Go Data logo"
        img1.id = "logo"
        document.getElementById("bilde").appendChild(img1)


        document.getElementById("fb").innerHTML = ""

        let img2 = document.createElement("img")
        img2.src = bilde2
        img2.alt = "Facebook logo"
        img2.id = "facebook"
        document.getElementById("fb").appendChild(img2)
    }
}

