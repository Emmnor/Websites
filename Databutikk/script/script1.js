/*Navigasjon*/
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


/* Åpner tilbudsmodalen */
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


//*    JS for det som ligger på komplette PC er

/* Åpne/Lukke PC modaler */
const Design = document.getElementById("Design")
function åpneDesign (){
    Design.style.display = "grid";
}

function lukkModal2 (){
    Design.style.display = "none";
}

const Game = document.getElementById("Game")
function åpneGame (){
    Game.style.display = "grid";
}

function lukkModal3 (){
    Game.style.display = "none";
}

const Work = document.getElementById("Work")
function åpneWork (){
    Work.style.display = "grid";
}

function lukkModal4 (){
    Work.style.display = "none";
}

//Legg til i handlekurv
let Data = []
let Acer = "Acer Predator Orion 3000"
let iMac = "iMac 24 tommer 2023"
let Mac = "Mac Mini 2023"



function LeggTilIHandlekurv1(Produkt, Produktpris){
    Data = [{
            ProduktNavn: Produkt ,
            ProduktPris: parseInt(Produktpris)
        }
    ]
    sessionStorage.setItem("Produkt", JSON.stringify(Data))
    alert("Lagt til i handlekurv")
}





//*      JS for det som ligger på Lag din egen PC

// https://www.w3schools.com/howto/howto_js_collapsible.asp
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




function LeggTillIHandlekurv2(){ 
    //  https://stackoverflow.com/questions/14800954/how-to-check-if-all-checkboxes-are-unchecked
    let checked = document.querySelectorAll("input:checked")
    let input = document.querySelectorAll("input")
    if(input.length-10 == checked.length){
        let Hovedkort = document.querySelector('input[name=Hovedkort]:checked').value
        let CPU = document.querySelector('input[name=Prosessor]:checked').value
        let Ram = document.querySelector('input[name=RAM]:checked').value
        let Grafikkort = document.querySelector('input[name=Grafikk]:checked').value
        let Harddisk = document.querySelector('input[name=Harddisk]:checked').value

        let Strøm = document.querySelector('input[id=Strøm]:checked').value
        let Nettverk = document.querySelector('input[id=Nettverk]:checked').value
        let Vifte = document.querySelector('input[id=Vifte]:checked').value
        let Kabinett = document.querySelector('input[id=Kabinett]:checked').value
        let Skjerm = document.querySelector('input[id=Skjerm]:checked').value
        let Mus = document.querySelector('input[id=Mus]:checked').value
        let Tastatur = document.querySelector('input[id=Tastatur]:checked').value

        //! Bruke getAttibute for å hente navn!!!!!!!
        // https://www.w3schools.com/jsref/met_element_getattribute.asp 

        let Komponenter = [
            {
                ProduktNavn: "Hovedkort",
                ProduktPris: parseFloat(Hovedkort)
            },
            {
                ProduktNavn: "Prosessor",
                ProduktPris: parseFloat(CPU)
            },
            {
                ProduktNavn: "RAM",
                ProduktPris: parseFloat(Ram)
            },
            {
                ProduktNavn: "Grafikkort",
                ProduktPris: parseFloat(Grafikkort)
            },
            {
                ProduktNavn: "Harddisk",
                ProduktPris: parseFloat(Harddisk)
            },
            {
                ProduktNavn: "Strømkilde",
                ProduktPris: parseFloat(Strøm)
            },
            {
                ProduktNavn: "Nettverkskort",
                ProduktPris: parseFloat(Nettverk)
            },
            {
                ProduktNavn: "Vifte",
                ProduktPris: parseFloat(Vifte)
            },
            {
                ProduktNavn: "Kabinett",
                ProduktPris: parseFloat(Kabinett)
            },
            {
                ProduktNavn: "Skjerm",
                ProduktPris: parseFloat(Skjerm)
            },
            {
                ProduktNavn: "Mus",
                ProduktPris: parseFloat(Mus)
            },
            {
                ProduktNavn: "Tastatur",
                ProduktPris: parseFloat(Tastatur)
            },
        ]

        sessionStorage.setItem("Produkt", JSON.stringify(Komponenter))
        alert("Lagt til i handlekurv")
    }
    else{
        alert("Du har ikke valgt alle komponentene")
    }
    
}



//*    JS for konvertering fra decimal til binær

function konverter(){
    let binær = document.getElementById("binær").value
    let decimal = parseInt(binær, 2)
    document.getElementById("utskrift1").innerHTML = binær + " i vanlige tall er " + decimal
    document.getElementById("binær").value = ""
    // https://www.codespeedy.com/how-to-convert-binary-to-decimal-in-javascript-easily/ 
}

function konverter2(){
    let desimal1 = parseInt(document.getElementById("desi").value)  //Seses som string hvis ikke jeg har parseInt og da funker det ikke.
    let binær1 = desimal1.toString(2)
    document.getElementById("utskrift1").innerHTML = desimal1 + " i binær er " + binær1
    document.getElementById("desi").value = ""
    // https://www.tutorialspoint.com/How-to-convert-Decimal-to-Binary-in-JavaScript 
}
