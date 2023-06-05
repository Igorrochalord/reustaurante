<?php
include("conexao2.php");
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM tabela_usuarios WHERE email = '$email' AND senha = '$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Login bem-sucedido, redirecionar para a página inicial do usuário
        $_SESSION['email'] = $email;
        header("Location: ../pages/index.html");
    } else {
        $erro = "Email ou senha inválidos.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tela de Login</title>
    <link rel="stylesheet" type="text/css" href="../public/css/registrolog.css">
</head>
<body>
    <div id="video-background">
        <video autoplay loop muted>
            <source src="../public/img/video1.mp4" type="video/mp4">
            <source src="../public/img/video1.mp4" type="video/webm">
            Desculpe, seu navegador não suporta vídeos HTML5.
        </video>
    </div>
    <div class="container">
        <h2>Tela de Login</h2>
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="email">Email:</label>
            <input type="text" name="email" required><br><br>
            <label for="senha">Senha:</label>
            <input type="password" name="senha" required><br><br>
            <input type="submit" value="Entrar">
        </form>
        <a class="register-link" href="registro.php">Registrar</a>
        <?php if (isset($erro)) echo "<p>$erro</p>"; ?>
    </div>
</body>
</html>


<!--<h2>Tela de Login</h2>
    <form method="POST" action=">
        <label for="email">Email:</label>
        <input type="text" name="email" required><br><br>
        <label for="senha">Senha:</label>
        <input type="password" name="senha" required><br><br>
        <input type="submit" value="Entrar">
    </form>
    <a href="registro.php">Registrar</a> -->