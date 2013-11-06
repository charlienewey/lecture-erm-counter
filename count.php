<?php
//get the q parameter from URL
$q = $_GET["q"];

$fn = "ermcount.txt";

if (!file_exists($fn)) {
    $num = 1;
} else {
    $fp = fopen($fn, 'r');
    $num = fgets($fp, 8);
    fclose($fp);
}

if ($q >= 0) {
    $num += 1;

    try {
        $fp = fopen($fn, 'w');
        fputs($fp, $num);
        fclose($fp);
    } catch (Exception $e) {
        die("Error.");
    }
}

echo $num;
?>
