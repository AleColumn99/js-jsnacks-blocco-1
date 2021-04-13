var quadrato;
var counter = 0;
var print = "";
var oltreMille = false;

while (!oltreMille) {
  counter++;
  quadrato = Math.pow(2, counter);
  if (quadrato < 1000) {
    print += "<li>" + quadrato + "</li>";
  } else {
    oltreMille = true;
  }
}

document.getElementById('quadrati').innerHTML = print;