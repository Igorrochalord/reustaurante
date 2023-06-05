<?php
//get e um dos métodos utilizados para o envio de dados de um formulário web para processamento
    $servidor="localhost";
    $usuario="root";
    $senha="";
    $dbname="reservasdb";
   // Criando a conexão
    $conn = new mysqli($servidor, $usuario, $senha, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Conexão bem-sucedida
echo "Conexão estabelecida com sucesso!";
?>
