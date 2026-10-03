
//Kos deg :)
//Mer enn halve koden er komentarer.


//Lager globale variabler
let spillere = []
let vinnere = []
let runder = 1
let tabell = ""

//Setter restart til å være dissabled 
document.getElementById("restart").disabled = true;

//Sjekker om det er noe i local storrage, hvis det er det så skal det som finnes i local storrage printes på siden.
//Det som blir henta ut her er da vinnerne etter hver runde som er spilt. 
if(localStorage.vinnere){
    vinnere = JSON.parse(localStorage.getItem("vinnere"))
    document.getElementById("highScore").innerHTML = vinnere
}
//Hvis det ikke finnes noe i local storrage blir det printa ut "Ingen registrerte vinnere" på siden.
else{
    document.getElementById("highScore").innerHTML = "Ingen registrerte vinnere"
}


//Funksjon for å kunne generere spillerarray ut i fra uthentet inputt fra bruker. 
//Parametere; Antall = antall spillere (fra select), spiller_array = spillere
function genererSpillere(antall, spiller_array){
    //Hvis spillernavnet har en verdi som er under 10 så skal det settes ut en null forran,
    //Hvis ikke så er det "vanlige" tall
    //Mindre eller lik (<=) antall for at den skal kjøre like mange ganger som inputt, at den ikke stopper på tallet før. 
    for(let i = 1; i <= antall; i++){
        let spillernmb
        if(i<10){
            spillernmb = "0" + i
        }
        else{
            spillernmb = i
        }

        //Setter sammen spillernavn og spillenummer
        let spiller = "spiller " + spillernmb
        //Generer spillerpoeng
        let poeng = Math.floor(Math.random() * 10) + 1

        //Genererer 3 objekter, en for spillernavn, en for poeng og en for spillernummer
        let spillerData = {
            spillernavn: spiller,
            poeng: parseInt(poeng), //Bruker parse for en failsafe slik at poeng er ett tall og ikke en string. 
            spillernmb: parseInt(spillernmb) //Bruker parse for en failsafe slik at spillernmb er ett tall og ikke en string. 
        }
        //Deretter pusher inn i spiller_array. siden vi har satt at Spillere er parameteren så pusher vi inn verdiene inn i spillere arrayen.  
        spiller_array.push(spillerData)
    }
    //Kaller på funksjonen loadTable som gjør at man printer ut spillere arrayen som en tabell på siden. 
    loadTable(spillere)
}

//Har spillere som paraemeter siden det er den dataen som skal legges inn i tabellen på siden
function loadTable(spillere){
    //Tømmer utskrift paragrafen på nettsiden slik at man er sikker på at den er tom . 
    document.getElementById("utskrift1").innerHTML=""    
    //Lager en tabell med hvilken runde det er som overskrift. Da bruker vi runder variablen. Den starter da på en siden dette er runde en. 
    let list = "<p> Runde: " + runder + "<table border ‘1‘> <tr> <th>Spiller</th> <th>Poeng</th> </tr>" 

    // I forEach funksjonen fungerer det slik; for hver av objekt i arrayet så legger vi til en tablerow med spillernavn og koresponderende poeng til spilleren. 
    // function arrows (=>) dokumentasjon https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 
    //forEach går igjennom hele parameteren spillere, men siden vi satt spillere til å være arrayen spillere så er det den dataen vi bruker her
    spillere.forEach((person) => { 
        list += "<tr>"
        list += '<td id=Lag style="text-align: center;">' + person.spillernavn + '</td>'
        list += '<td id=Poeng style="text-align: center;">' + person.poeng + "</td>"
        list += "</tr>"
    })

    //avslutter tabell
    list += "</table> </p>"

    //Legger inn tabellen i en variabel
    tabell += list
}


//Parameter som spillere siden det er spillerverdiene (spiller arrayen) som skal brukes i denne funksjonen
function cupRunder(spillere){
    //Legger til 1 på rundene
    runder +=1

    //Lager en tom liste som skal brukes til de spillerne som har vunnet kampene sine
    kvalifiserte =[]

    //Her fåregår kampene, kjører så lenge spillerarrayen ikke er halvert. 
    while(spillere.length != spillere.length/2){
        //Sorterer fra størt til minst. Her brukes objektet spillernumber. 
        spillere.sort((a,b) => a.spillernmb - b.spillernmb)
        
        //legger inn spiller med index 0 som motstander 1. og deretter tar den siste motsanderen i arrayet til å være motstander 2.
        motstander1 = spillere[0]
        motstander2 = spillere[spillere.length-1]

        // hvis motstander 1 og 2 har samme poengsum så går den motstanderen med lavest navnnummer videre til neste runde
        //Her bruker vi også objektet spillernmb
        //(altså blir pusha inn i kvalifiserte arrayet)
        if(motstander1.poeng == motstander2.poeng){
            if(motstander1.spillernmb < motstander2.spillernmb){
                kvalifiserte.push(motstander1)
            }
            else{
                kvalifiserte.push(motstander2)
            }
        }

        //den spilleren som har høyest poengsum blir pusha inn i kvalifiserte og er med i neste runde
        else if(motstander1.poeng < motstander2.poeng){
            kvalifiserte.push(motstander2)
        }

        else{
            kvalifiserte.push(motstander1)
        }

        //Her fjerner vi de spillerne som har spilt i en runde. 
        //fjerner den første verdien i arrayet
        spillere.shift()
        //fjerner den siste verdien i arrayet
        spillere.pop()
    }

    //Legger til alle spillerne som har vunnet kampene sinne tilbake til spillere arrayet.
    kvalifiserte.forEach((spiller) => {
        spillere.push(spiller)
    })

    //Tømmer kvalifiserte arrayet
    kvalifiserte = []

    //For hver av de spillerne som er igjen så skal det legges til poeng fra 1-10 på den orginale poengsummen
    spillere.forEach((spiller) => {
        spiller.poeng += Math.floor(Math.random()*10)+1
    })

    //Lager en ny tabell med de nye poengene og med de spillerne som er igjen.
    loadTable(spillere)
}


function oppstart(){
    //henter ut brukerinputt
    let antall_Spillere = document.getElementById("selSpillere").value;
    //genererer spillere
    genererSpillere(antall_Spillere, spillere)
    //Legger ut spillerne i arrayet ut på siden som en tabell

    //cupRunder kjøres helt tils det er en spiller igjen, altså når det står igjen en vinner. 
    while(spillere.length != 1){
        //Setter parameter til å være spillere for igjen, spillere array-dataen skal brukes her. 
        cupRunder(spillere)
    }

    //Hvis det er en spiller igjen så skal den erkleres som vinner og legges inn i local storrage. 
    if(spillere.length == 1){
        
        //Henter hvilken spiller som vant. index 0 siden det er en spiller igjen og henter deretter spillernavnet. 
        alert(spillere[0].spillernavn + " vant. Spillet er over!")

        //Hvis det finnes noe i local storrage så skal man hente ut verdiene og skjøte på navnene etter det i arrayen. 
        if(localStorage.vinnere){
            vinnere = JSON.parse(localStorage.getItem("vinnere"))
            vinnere.push(spillere[0].spillernavn)
            localStorage.setItem("vinnere", JSON.stringify(vinnere))
        }

        //Hvis det ikke finnes noen verdier i local storage så, legger man bare rett inn i local storage. 
        else if(localStorage.vinner == null){
            vinnere.push(spillere[0].spillernavn)
            localStorage.setItem ("vinnere",JSON.stringify(vinnere))
        }
    }

    //skriver ut tabellen på siden. 
    document.getElementById("utskrift1").innerHTML=tabell

    //Gjør det slik at man ikke kan starte på nytt med en gang, men må laste inn siden på nytt. 
    //Altså gjør sånn at restart knappen ikke er disabled 
    document.getElementById("restart").disabled = false;
    //og gjør sånn at start cup er disabled. 
    document.getElementById("start").disabled = true;
}
