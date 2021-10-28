<?php

$db = "";
$dbUser = "";
$dbPass = "";


try 
{
    $net = new PDO("mysql:host=localhost;dbname=$db", $dbUser, $dbPass);
} 
catch (PDOException $e) 
{
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

$search = $_REQUEST['code'];
echo "Busqueda para: $search <br/> <hr>";


$Query = "Select fullname from crs_migration_01identification where fullname like '%$search%'";
$Select = $net->prepare($Query);
$Select->execute();

echo "Total de Participantes encontrados: " . $Select->rowCount();

while($dataS = $Select->fetch())
{
    echo "<br/> $dataS[0]";
}


?>