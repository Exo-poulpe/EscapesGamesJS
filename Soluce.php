<?php

const ADDR = "10.5.51.32";
const DEFAULT_VALUE = ["A","9"];

const REPEAT = 2;

function getSolutionHTML()
{
  if(!empty($htmlForSoluce = file_get_contents("http://" . ADDR . "/EscapeGame/soluce.php")))
    {

      $html = $htmlForSoluce;
      for ($i=0; $i < $REPEAT; $i++) {
        $html = strstr($html,"-");
        $html = substr($html,1);
      }
      $sol1 = substr($html,0,1);
      $sol2 = substr($html,-1,1);
      $Table = [$sol1,$sol2];
    }
    else
    {
      $Table = DEFAULT_VALUE;
    }
    return $Table;
  }

  function getSolutionJSON()
  {
    $ping = curl_init("http://" . ADDR . "/EscapeGame/soluce.php");
    curl_setopt($ping,CURLOPT_RETURNTRANSFER,true);
    if (curl_exec($ping)==true)
    {
      $json = file_get_contents("http://" . ADDR . "/EscapeGame/soluce.php");
      $obj = json_decode($json);
      $Table = [$obj->soluce1,$obj->soluce2];
    }
    else
    {
      $Table = DEFAULT_VALUE;
    }
    return $Table;
  }
  ?>
