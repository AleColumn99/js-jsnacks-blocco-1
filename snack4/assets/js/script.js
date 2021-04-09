//lista invitati
var invitati = [
  "mario",
  "francesco",
  "paolo",
  "stefano",
  "alessandro",
  "maria",
  "bianca",
  "martina",
  "lorena",
  "francesca",
  "luigi",
  "tommaso",
  "valerio",
  "emanuela"
]

//chiedo il nome
var nome = prompt("Come ti chiami?");

//verifico che sia presente
var presente = false;
for(var i=0; i<invitati.length; i++){
  invitato = invitati[i];
  if(nome == invitato){
    presente = true;
    break;
  }
}

if(presente){
  document.getElementById('inlista').innerHTML = "PRESENTE";
}else{
  document.getElementById('inlista').innerHTML = "ASSENTE";
}