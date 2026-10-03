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




//* Redigere utseende

// https://teamtreehouse.com/community/how-to-create-multidimensional-array-with-key-value-pair-js 
const farger = {
    Vanlig: {
        //Vanlige farger
        tekstfarge: "#000000",
        tekstfarge2: "#FFFFFF",
        bakgrunsfarge: "#fefefe",
        navfarge: "#dadada",
        navdetalj: "#8a8a8aa1",
        meny: "#0e2839",
        farge1: "#0e2839",
        farge2: "#3a6480"
    },
    Gul: {
        //Gul og svart
        tekstfarge: "#FFFF00",
        tekstfarge2: "#FFFF00",
        bakgrunsfarge: "#000000",
        navfarge: "#737373",
        navdetalj: "#4d4d4d",
        meny: "#000000",
        farge1: "#2f2f2f",
        farge2: "#AFAF00"
    },
    Omvendt: {
        //Omvendte farger
        tekstfarge: "#FFFFFF",
        tekstfarge2: "#000000",
        bakgrunsfarge: "#010101",
        navfarge: "#252525",
        navdetalj: "#757575",
        many: "#000000",
        farge1: "#f1d7c6",
        farge2: "#c59b7f"
    }
}

// https://www.w3schools.com/jsref/jsref_keys.asp 
// https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-memberss 
Object.keys(farger).forEach(farge => {
    let valg = document.createElement("option")
    valg.innerHTML = farge
    valg.value = farge
    document.getElementById("selFarge").appendChild(valg)
});


//TODO: Fullføre denne. DVS. å finne fargene som skal være på de ulike. Fjerne omvent og ha blå som bakgrund. 

let endre = JSON.parse(localStorage.getItem("color"))
console.log(endre)

if(endre == null){
    endre = farger["Vanlig"]
}

endreFarge(endre)

function hent_farge(){
    let farge = farger[document.getElementById("selFarge").value];
    endreFarge(farge)
}

function endreFarge(color){
    document.querySelector("header").style.backgroundColor = color.bakgrunsfarge;
    document.querySelector("main").style.backgroundColor = color.bakgrunsfarge;
    document.querySelector("nav").style.border.bottom = color.navdetalj;
    document.querySelector("nav").style.backgroundColor = color.navfarge;
    document.querySelector("body").style.color = color.tekstfarge;
    document.querySelector("body").style.backgroundColor = color.bakgrunsfarge;
    document.getElementById("handlevogn").style.backgroundColor = color.farge1;
    document.getElementById("handlevogn").style.color = color.tekstfarge2;
    document.getElementById("meny").style.backgroundColor = color.farge1;
    document.getElementById("meny").style.color = color.tekstfarge2;
    document.getElementById("mySidebar").style.backgroundColor = color.meny

    localStorage.setItem("color", JSON.stringify(color))
}
