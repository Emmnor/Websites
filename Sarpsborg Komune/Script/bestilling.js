//array med ulike aktiviteter til select
let aktiviteter = ["Kino", "Sarpsborg08 kamp", "Spartakamp", "Inspiria Science Center", "Badeland", "Svev Trampolinepark", "Kjerringåsen Alpinsenter", "Sarpsborg Scene"];

//legger array inn i select
for(let i=0; i<aktiviteter.length; i++) {
    //lage et listelement
    let valg = document.createElement("option");
    //verdi i array blir value i listen. -> verdien i listen som kommer opp på nettsiden blir det samme som verdien/index (tallet) i aktiviteter arrayen. 
    valg.innerHTML = aktiviteter[i];
    //index i array blir value i listen. -> du legger inn teksten fra arrayen inn på nettsiden
    valg.value = i;
    //legger elementet i listen
    document.getElementById("selAktivitet").appendChild(valg);
} 

function reg() {
    //henter inn verdier fra komponenter
    let name = document.getElementById("txtName").value;
    let lastName = document.getElementById("txtEtternavn").value;
    let email = document.getElementById("txtEmail").value;
    let activity = aktiviteter[document.getElementById("selAktivitet").value];
    /*Lager en date variabel (objekt) for å kunne hente verdiene vi ønsker. et objekt hvor vi kan velge verdier fra
    Inneholder mer info som man kan bruke
    Motorsykkel*/
    let aktTid = new Date(document.getElementById("datTid").value);
    //Henter elementer fra Date for å lage datoen vi ønsker må vi legge til +1 på mnd da den teller fra 0-11
    //parseInt gjør om fra en tekst string til en en verdi/variabel.
    let datoen = aktTid.getDate() + "/" + parseInt(aktTid.getMonth()+1) + "-" +aktTid.getFullYear();

    //sjekker om checkbox er huket av
    let signup = "";
    if(chbNews.checked == true) {
        signup = "Du har registrert deg for å svare på en spørreundersøkelse"
    }
    else {
        signup = "Du har ikke registrert deg for å svare på en spørreundersjøkelse"
    }
    
    //setter opp ulike variabler som til sammen skal utgjøre en mail, de variablene som inneholder order "kode"
    //er HTML referanser som konstruerer emailen, IKKE innholdet
    let epostKode = "mailto: ";
    //henter epostadressen fra input
    let mailA = email
    //overskrift på mail
    let emneKode = "?subject=";
    var emne = "Takk for din bestilling";
    //innholdet i mailen
    let kroppKode = "&body=";
    let overskrift = "Her er din registrerte informasjon";
    let linjeskiftKode = "%0D%0A";
    //legger alle strengene sammen til en lang streng
    let mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + " " + lastName +
    linjeskiftKode + "Aktivitet bestilt: " + activity + linjeskiftKode + "Dato valgt: " + datoen + linjeskiftKode + signup;

    //sender mail
    window.location.href = mld;
}
