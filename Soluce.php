<?php
getSolutionJSON();

function getSolutionHTML()
{
  $htmlForSoluce = file_get_contents("http://10.5.51.32/EscapeGame/soluce.php");
  $REPEAT = 2;
  //var_dump($htmlForSoluce);
  $html = $htmlForSoluce;
  for ($i=0; $i < $REPEAT; $i++) {
    $html = strstr($html,"-");
    $html = substr($html,1);
  }

  $sol1 = substr($html,0,1);
  $sol2 = substr($html,-1,1);
  //print($sol1);
  //print($sol2);
  $Table = [$sol1,$sol2];
  return $Table;
}

function getSolutionJSON()
{
  $json = file_get_contents("http://10.5.51.32/EscapeGame/soluce.php");
  $obj = json_decode($json);
  //print($obj->soluce1);
  //print($obj->soluce2);
  $Table = [$obj->soluce1,$obj->soluce2];
  return $Table;
}
//header("Location: index.php");

 ?>
