//* det som ligger på Hjem siden

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

if(localStorage.Navn){
    let Navn = localStorage.getItem("Navn")
    document.getElementById("utskrift3").innerHTML = "Hei " + Navn + ", Velkommen tilbake!"
}

else{
    document.getElementById("utskrift3").innerHTML = "Hei!"
}