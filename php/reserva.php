
<?php
include("conexao.php");

$nome = mysqli_real_escape_string($conn, $_POST["name"]);
$numero = mysqli_real_escape_string($conn, $_POST["phone"]);
$quantidade = mysqli_real_escape_string($conn, $_POST["person"]);
$reserva = mysqli_real_escape_string($conn, $_POST["reservation-date"]);
$data = mysqli_real_escape_string($conn, $_POST["reservation-date"]);
$mensagem = mysqli_real_escape_string($conn, $_POST["message"]);

$sql = "INSERT INTO reservas (name, phone, person, reservationDate, time, mensage) 
        VALUES ('$nome', '$numero', '$quantidade', '$reserva', '$data', '$mensagem')";

if(mysqli_query($conn, $sql)) {
    echo "ok";
} else {
    echo "erro: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
