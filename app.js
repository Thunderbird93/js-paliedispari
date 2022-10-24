//Palidroma
// const parolaInserita = prompt('');
// const parolaGirata = giraParola(parolaInserita.trim())
// const risultato = checkPalindorma(parolaInserita.trim(), parolaGirata)
// console.log(risultato);


// function giraParola(parola){
//   console.log(parola)
//   let nuovaParola = '';
//   nuovaParola = parola.split('').reverse().join('');
//   return nuovaParola;
// } 

// function checkPalindorma(parolaInserita, parolaGirata){
//   if(parolaInserita.toLowerCase() === parolaGirata.toLowerCase()) return 'PALINDOMA';
//   return 'NON PALINDROMA'
// }

//Pari e Dispari
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//L’utente sceglie pari o dispari
let pari_dispari; //= prompt('Scegli un numero Pari o Dispari')
//inserisce un numero da 1 a 5.
let numeroUtente = parseInt (prompt('Scegli un numero da 1 a 5'))
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numeroAi = Math.floor((Math.random()*5)+1);
document.getElementById("numeroAi").innerHTML = numeroAi;
document.getElementById("numeroUtente").innerHTML = numeroUtente;
//Sommiamo i due numeri
let somma = numeroAi + numeroUtente

let risultato 


if (somma % 2 === 0){
    risultato = "Vince il Pari!"
} else {
    risultato = "Vince il Dispari!"
}
document.getElementById("risultato").innerHTML = risultato

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

