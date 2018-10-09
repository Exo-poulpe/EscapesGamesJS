<?php
include("Soluce.php");
$solution = getSolutionJSON();

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date dans le passé
?>
<!DOCTYPE html>
<html>
<head>

  <title>Bouton</title>
  <link rel="stylesheet" type="text/css" href="style.css">

  <script>var Addr = JSON.parse('<?= json_encode(ADDR) ?>');</script>
  <script src="./javascript.js"></script>
</head>

<body>
  <table border="solid" class="Table" id="TableSol1">
    <tr>
      <?php
      if (isset($solution)){
        for ($i=0; $i < count($solution); $i++) {if ($i == 1) {
          print('</tr></table><table border="solid"  class="Table"id="TableSol2"><tr>');
        } ?>
        <td>
          <?php print('<div id="sol' . $i . '">'.$solution[$i].'</div>'); ?>
        </td>
      <?php }

    } ?>
  </tr>
</table>
<table border="solid" class="Table" id="TablePow1"  >
  <tr>
    <?php
    for ($i=3; $i >= 0; $i--) { ?>
      <td>2<sup><?php print($i); ?></sup></td>
      <?php
    }
    ?>
  </tr>
</table>
<table border="solid" class="Table" id="TablePow2"  >
  <tr>
    <?php
    for ($i=3; $i >= 0; $i--) { ?>
      <td>2<sup><?php print($i); ?></sup></td>
      <?php
    }
    ?>
  </tr>
</table>
<table border="solid" id="Table1"  class="Table">
  <tr>

    <?php
    for ($i=0; $i < 8; $i++) {if ($i == 4) {
      print('</tr></tabl><table border="solid" id="Table2" class="Table"><tr>');
    } ?>
    <td>
      <?php print('<div id="value'.$i.'">_</div>'); ?>
    </td>
  <?php }

  ?>
</tr>
</table>
<table border="solid" id="TableHex1" class="Table">
  <tr>
    <?php
    for ($i=0; $i < 2; $i++) {if ($i == 1) {
      print('</tr></tabl><table border="solid" id="TableHex2" class="Table"><tr>');
    } ?>
    <td>
      <?php print('<div id="hex'.$i.'">0</div>'); ?>
    </td>
  <?php } ?>
</tr>
</table>


<form method="post" action="serveur.php">
  <input type="Button" value="0" name="Button" onclick="ListSetter(0)" id="B0" class="Button"/>
  <input type="Button" value="1" name="Button" onclick="ListSetter(1)" id="B1" class="Button"/>
  <input type="Button" value="X" name="Delete" onclick="ResetArray()" id="X" class="Button"/>
</form>

</body>

</html>
