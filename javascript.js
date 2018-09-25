
InitializeArray();
var listBin = GetItem('listBin');
//listBin = ListSetter();
function GetItem(name){
  return localStorage.getItem(name).split(",");
}

function InitializeArray()
{
  var char = '0';
  var result = [];
  for (var i=0; i < 8; i++) {
    result.push(char);
  }
  localStorage.setItem('listBin', result);
}

function ListSetter(value)
{
  listBin.push(value);
  while (listBin.length > 8)
  {
    listBin.shift(listBin);
  }
  Save(listBin);
  UpdateView(listBin);
  //console.log(listBin);
  return listBin;
}

function Save(listBin)
{
  localStorage.setItem('listBin', listBin);
}

function Update()
{

  listBin = GetItem('listBin');

}

function ResetArray()
{
  for (var i = 0; i < listBin.length; i++) {
    listBin[i] = "0";
  }
  Save(listBin);
  UpdateView(listBin);
}

function UpdateView(listBin){
  for (var i = 0; i < listBin.length; i++) {
    //console.log('value'+i);
    document.getElementById('value'+i).innerHTML = (listBin[i]);
  }
  var bin = "";
  for (var i = 0; i < listBin.length; i++) {
    bin += listBin[i];
  }
  var hex = [];
  hex[0] = parseInt(bin.substring(0,4),2).toString(16).toUpperCase();
  hex[1] = parseInt(bin.substring(4),2).toString(16).toUpperCase();

  for (var i = 0; i < hex.length; i++) {
    document.getElementById('hex'+i).innerHTML = hex[i];
  }

  //console.log(document.getElementById('sol0').innerHTML);
  if (hex[0] == document.getElementById('sol0').innerHTML && hex[1] == document.getElementById('sol1').innerHTML ) {
    Win();
  }

}

function GetHexFromList($listBin)
{

  $bin[0] = substr(implode("",$listBin),0,4);
  $bin[1] = substr(implode("",$listBin),4,4);
  $hex[0] = strtoupper(dechex(bindec($bin[0])));
  $hex[1] = strtoupper(dechex(bindec($bin[1])));
  return $hex;
  //var_dump($hex);

}

function Win()
{
  localStorage.clear();
  alert("(:");
  window.Location = "EscapeGame/end.php";
}
