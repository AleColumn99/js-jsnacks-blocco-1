var sum = parseInt(0);

for(var i = 0; i < 10; i++){
  var number = parseInt(prompt('Inserisci un numero'));
  sum += number;
}

document.getElementById('somma').innerHTML = sum;