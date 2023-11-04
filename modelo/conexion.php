<?php
  // Conectar a la base de datos
  $conexion = new mysqli("localhost", "root", "", "mi_base_de_datos");

  // Comprobar los datos de inicio de sesión
  $usuario = $_POST["usuario"];
  $contraseña = $_POST["contraseña"];

  $consulta = "SELECT * FROM usuarios WHERE usuario='$usuario' AND contraseña='$contraseña'";
  $resultado = $conexion->query($consulta);

  // Si los datos son correctos, iniciar sesión
  if ($resultado->num_rows == 1) {
    // Iniciar sesión
    session_start();
    $_SESSION["usuario"] = $usuario;

    // Redireccionar al usuario a la página principal
    header("Location: index.php");
  } else {
    // Mostrar un mensaje de error
    echo "Los datos de inicio de sesión son incorrectos.";
  }

  // Cerrar la conexión a la base de datos
  $conexion->close();
?>