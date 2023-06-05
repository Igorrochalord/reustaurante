<?php
include("conexao2.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "INSERT INTO tabela_usuarios (usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";

    // Verifica se o email já está registrado
    $sql_verifica = "SELECT * FROM tabela_usuarios WHERE email = '$email'";
    $result_verifica = $conn->query($sql_verifica);

    if ($result_verifica->num_rows > 0) {
        $erro = "Este email já está registrado. Por favor, use outro email.";
    } else {
        // Insere o novo usuário no banco de dados
        $sql = "INSERT INTO tabela_usuarios (usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";

        if ($conn->query($sql) === TRUE) {
            // Registro bem-sucedido, redirecionar para a página de login
            header("Location: login.php");
        } else {
            $erro = "Erro ao registrar usuário: " . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tela de Registro</title>
    <link rel="stylesheet" type="text/css" href="../public/css/registro.css">
</head>
<body>
<div id="video-background">
    <video autoplay loop muted>
        <source src="../public/img/video2.mp4" type="video/mp4">
        Desculpe, seu navegador não suporta vídeos HTML5.
    </video>
    </div>

    <div class="container">
        <h2>Tela de Registro</h2>
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="usuario">Usuário:</label>
            <input type="text" name="usuario" required><br><br>
            <label for="email">Email:</label>
            <input type="text" name="email" required><br><br>
            <label for="senha">Senha:</label>
            <input type="password" name="senha" required><br><br>
            <input type="submit" value="Registrar">
        </form>
        <a class="back-button"href="login.php">Voltar para Login</a>
        <?php if (isset($erro)) echo "<p>$erro</p>"; ?>
    </div>
</body>
</html>
