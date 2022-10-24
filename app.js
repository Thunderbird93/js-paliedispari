//Palidroma
const parolaInserita = prompt("")
const parolaGirata = giraParola(parolaInserita.trim())
const risultato = checkPalindroma(parolaInserita.trim(), parolaGirata)
console.log(risultato);

function giraParola(parola){
    console.log(parola)
    let nuovaParola = " ";
    nuovaParola = parola.split(" ").reverse().join(" ");
    return nuovaParola;
}

function checkPalindroma(parolaInserita, parolaGirata){
    if(parolaInserita.toLowerCase() === parolaGirata.toLowerCase()) return "Palindroma";
    return "Non Palindroma";
}