//Palidroma
const parolaInserita = // prompt('')
const parolaGirata = giraParola(parolaInserita.trim())
const risultato = checkPalindorma(parolaInserita.trim(), parolaGirata)
console.log(risultato);


function giraParola(parola){
  console.log(parola)
  let nuovaParola = '';
  nuovaParola = parola.split('').reverse().join('');
  return nuovaParola;
} 

function checkPalindorma(parolaInserita, parolaGirata){
  if(parolaInserita.toLowerCase() === parolaGirata.toLowerCase()) return 'PALINDOMA';
  return 'NON PALINDROMA'
}

//Pari e Dispari