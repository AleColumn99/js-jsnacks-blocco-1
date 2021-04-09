//inserisci la prima parola
var parola1 = prompt('Inserisci una parola');

//inserisci la seconda parola
var parola2 = prompt('Inserisci un\'altra parola')

//confronta lunghezza
var parolaLunga;
var parolaCorta;

if(parola1.length == parola2.length){
  alert('Le due parole hanno la stessa lunghezza!')
}else if(parola1.length < parola2.length){
  parolaCorta = parola1;
  parolaLunga = parola2;
}else{
  parolaCorta = parola2;
  parolaLunga = parola1;
}

//stampa prima corta e poi lunga
var stampaParole = parolaCorta + " " + parolaLunga;
document.getElementById('stampa').innerHTML = stampaParole;