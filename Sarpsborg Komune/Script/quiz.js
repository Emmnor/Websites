const awnser1 = document.getElementById("svar2");
const awnser2 = document.getElementById("svar6");
const awnser3 = document.getElementById("svar9");



function revRes(){
    let counter = 0;

    if (awnser1.checked){
    counter += 1;
    }

    if (awnser2.checked){
    counter += 1;
    }

    if(awnser3.checked){
    counter += 1;
    }
    
    document.getElementById("resultat").innerHTML="Du fikk " + counter + "/3 riktig"
}
