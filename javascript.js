
var listBin = ["_","_","_","_","_","_","_","_"];// initialisation de la table des solutions binaires
//const Addr = "10.5.51.32";
const LimitBin = 8;

// Permet d'inserer la valeur dans la liste en decalant la liste
function ListSetter(value){
  listBin.push(value);
  while (listBin.length > LimitBin)
  {
    listBin.shift(listBin);
  }
  UpdateView(listBin);
  return listBin;
}

// Remet la liste par defaut
function ResetArray(){
  for (var i = 0; i < listBin.length; i++) {
    listBin[i] = "_";
  }
  UpdateView(listBin);
}

// Affiche les donnees sur la page
function UpdateView(listBin){
  var bin = "";
  var hex = [];
  
  for (var i = 0; i < listBin.length; i++) {
    if(listBin[i] == "_"){bin += "0";}else{bin += listBin[i];}
  }

  for (var i = 0; i < listBin.length; i++) {
    document.getElementById('value'+i).innerHTML = (listBin[i]);
  }
  hex[0] = parseInt(bin.substring(0,4),2).toString(16).toUpperCase();
  hex[1] = parseInt(bin.substring(4),2).toString(16).toUpperCase();

  for (var i = 0; i < hex.length; i++) {
    document.getElementById('hex'+i).innerHTML = hex[i];
  }

  if (hex[0] == document.getElementById('sol0').innerHTML && hex[1] == document.getElementById('sol1').innerHTML ) {
    Win();
  }
}

// Convertis le la liste binaire en valeurs hexadecimales
function GetHexFromList(listBin){

  console.log(tmpListBin);
  var bin = [];
  var hex = [];
  bin[0] = substr(implode("",tmpListBin),0,4);
  bin[1] = substr(implode("",tmpListBin),4,4);
  hex[0] = strtoupper(dechex(bindec(bin[0])));
  hex[1] = strtoupper(dechex(bindec(bin[1])));
  return hex;
}

// Finis la partie
function Win(){
  var Address = "http://" + Addr + "/escapeGame/end.php";
  localStorage.clear();
  alert("Gagné");
  window.location.replace(Address);
  //window.open("http://localhost/");
}
