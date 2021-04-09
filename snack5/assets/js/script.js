//creo l'array
var array = []

//chiedo 6 numeri e se dispari immetto
for(var i=0; i<6; i++){
  var number = parseInt(prompt('Inserisci un numero'));
  if(number % 2 == 1){
    array.push(number);
  }
}

//console.log di verifica
console.log(array);