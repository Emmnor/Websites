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




//*      JS for det som ligger på Betaling
let Data = JSON.parse(sessionStorage.getItem("Produkt"))
    


if(sessionStorage.Produkt){
    let Tabell = "<table> <tr><th>Produkt</th><th>Produktpris</th></tr>"
    
    Data.forEach((produkt) => {
        Tabell += "<tr><td>" + produkt.ProduktNavn + "</td>"
        Tabell += "<td>" + produkt.ProduktPris + " kr </td></tr>"
    });
    
    Tabell += "</table>"
    document.getElementById("utskrift2").innerHTML = Tabell
}

else{
    document.getElementById("utskrift2").innerHTML = "Du har ingenting i handlekurven"
}



function SendBestilling(){
    let Fornavn = document.getElementById("fornavn").value
    let Etternavn = document.getElementById("etternavn").value
    let Mail = document.getElementById("mail").value

    const filter = /\S+@+\S+\.\S+/;

    localStorage.setItem("Navn", Fornavn)



    if(filter.test(Mail)){
        
        if(Fornavn !== "" && Etternavn !== ""){
            //Her vil mail funksjon komme
            //setter opp ulike variabler som til sammen skal utgjøre en mail, de variablene som inneholder order "kode"
            //er HTML referanser som konstruerer emailen, IKKE innholdet
            let epostKode = "mailto: ";
            //henter epostadressen fra input
            let mailA = Mail
            //overskrift på mail
            let emneKode = "?subject=";
            var emne = "Takk for din bestilling";
            //innholdet i mailen
            let kroppKode = "&body=";
            let overskrift = "Her er din bestilling";
            let linjeskiftKode = "%0D%0A";

            Produkter = []
            Data.forEach((navn) => {
                Produkter.push(navn.ProduktNavn)
            })

            
            let Pris = Data.reduce((Sum, verdi) => Sum + verdi.ProduktPris, 0) //Sum er summen som man er på, verdi er index som skal legges på i sum. startsum er 0
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
            
            //  Forklaring
            //Start: (Sum , verdi) (Parametere) => 0 + første index i array (eks 5). 
            //2 runde: (5 + andre index i array (eks 7))
            //3 runde: (12 + trede index i array (osv.))

            //https://stackoverflow.com/questions/14800954/how-to-check-if-all-checkboxes-are-unchecked

            //legger alle strengene sammen til en lang streng
            
            let mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + Fornavn + " " + Etternavn +
            linjeskiftKode + "Bestilte produkter: " + Produkter + linjeskiftKode + "Pris med MVA: " + Pris + " kr"+ linjeskiftKode + "Pris uten MVA: " + 0.75*Pris + " kr";

            //sender mail
            window.location.href = mld;

        }
        else{
            alert("Du må skrive inn navn")
        }
    }
    else{
        console.log(Mail)
        alert("Ugjyldig format på e-mail")
    }

}