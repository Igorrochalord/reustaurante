
<?php
include("conexao.php");

$nome = mysqli_real_escape_string($conn, $_POST["name"]);
$numero = mysqli_real_escape_string($conn, $_POST["phone"]);
$quantidadePessoas = mysqli_real_escape_string($conn, $_POST['person']);
$reserva =date('Y-m-d', strtotime($_POST['reservation-date']));
$data = date('H:i', strtotime($_POST['hour']));
$mensagem = mysqli_real_escape_string($conn, $_POST["message"]);
print_r($_POST);
$sql = "INSERT INTO reservas (name, phone, person , reservationDate, hour, mensage) 
        VALUES ('$nome', '$numero', '$quantidadePessoas', '$reserva', '$data', '$mensagem')";


if(mysqli_query($conn, $sql)) {
    echo "ok";
} else {
    echo "erro: " . mysqli_error($conn);
}

mysqli_close($conn);
?>