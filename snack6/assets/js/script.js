//chiedo all'utente di quanti numeri vuole il cubo
var n = prompt("Inserisci il numero finl al quale dobbiamo calcolare i cubi");

//ciclo con cui calcolo i cubi e li stampo
var cubicNum;
var cubicSum = 0;
var print = "";
for (var i = 0; i <= n; i++) {
  cubicNum = Math.pow(i, 3);
  cubicSum += cubicNum;
  print += "<li>" + i + "³ = " + cubicNum + "</li>";
}
document.getElementById('cubi').innerHTML = print;
document.getElementById('somma_cubi').innerHTML = "La somma dei cubi fino al numero richiesto è: " + cubicSum;