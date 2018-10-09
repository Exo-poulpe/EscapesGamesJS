
//InitializeArray();
var listBin = [0,0,0,0,0,0,0,0];// initialisation de la table des nsolutions binaires
var Addr = "10.5.51.32";

function ListSetter(value){
  listBin.push(value);
  while (listBin.length > 8)
  {
    listBin.shift(listBin);
  }
  UpdateView(listBin);
  return listBin;
}

function ResetArray(){
  for (var i = 0; i < listBin.length; i++) {
    listBin[i] = "0";
  }
  UpdateView(listBin);
}

function UpdateView(listBin){
  var bin = "";
  var hex = [];
  for (var i = 0; i < listBin.length; i++) {
    document.getElementById('value'+i).innerHTML = (listBin[i]);
  }

  for (var i = 0; i < listBin.length; i++) {
    bin += listBin[i];
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

function GetHexFromList($listBin){
  $bin[0] = substr(implode("",$listBin),0,4);
  $bin[1] = substr(implode("",$listBin),4,4);
  $hex[0] = strtoupper(dechex(bindec($bin[0])));
  $hex[1] = strtoupper(dechex(bindec($bin[1])));
  return $hex;
}


function Win(){
  var Address = "http://" + Addr;
  localStorage.clear();
  alert("Gagné");
  window.location.replace(Address + "/escapeGame/end.php");
  window.open("http://localhost/");
}
