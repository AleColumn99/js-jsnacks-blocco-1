var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum = 0;
var total = numbers.length;

for (var i=0; i<10; i++) {

  var number = numbers[i];
  sum += number;

}

var media = sum / total;

document.getElementById('text').innerHTML = "Somma: " + sum + "<br>Media: " + media;