var input = prompt("Inserisci un numero a quattro cifre:");

if (input.length == 4) {

  var inputSplit = input.toString();

  var sum = 0;
  for (var i=0; i<4; i++) {

    sum += parseInt(inputSplit[i]);

  }
  document.getElementById('somma').innerHTML = sum;

} else {

  alert("Input non valido");

}