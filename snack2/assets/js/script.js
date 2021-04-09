//inserisci la prima parola
var primaParola = prompt('Inserisci una parola');

//inserisci la seconda parola
var secondaParola = prompt('Inserisci un\'altra parola')

//confronta lunghezza
var parolaLunga;
var parolaCorta;

if(primaParola.length <= secondaParola.length){
  parolaCorta = primaParola;
  parolaLunga = secondaParola;
}else{
  parolaCorta = secondaParola;
  parolaLunga = primaParola;
}

//stampa prima corta e poi lunga
var stampaParole = parolaCorta + " " + parolaLunga;
document.getElementById('stampa').innerHTML = stampaParole;