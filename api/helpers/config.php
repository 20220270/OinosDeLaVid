<?php
header('Access-Control-Allow-Origin: *');
// Se establece la zona horaria local para la fecha y hora del servidor.
date_default_timezone_set('America/El_Salvador');
// Constantes para establecer las credenciales de conexión con el servidor de bases de datos.
define('SERVER', 'localhost');
define('DATABASE', 'luxurywinedb');
define('USERNAME', 'nuevoUser'); 
define('PASSWORD', 'nuevouser123');
?>