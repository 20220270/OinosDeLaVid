<?php
// Se incluye la clase del modelo.
require_once('../../models/data/cliente_data.php');

// Se comprueba si existe una acción a realizar, de lo contrario se finaliza el script con un mensaje de error.
if (isset($_GET['action'])) {
    // Se crea una sesión o se reanuda la actual para poder utilizar variables de sesión en el script.
    session_start();
    // Se instancia la clase correspondiente.
    $cliente = new ClienteData;
    // Se declara e inicializa un arreglo para guardar el resultado que retorna la API.
    $result = array('status' => 0, 'session' => 0, 'recaptcha' => 0, 'message' => null, 'error' => null, 'exception' => null, 'username' => null);

    // Se verifica si existe una sesión iniciada como cliente para realizar las acciones correspondientes.
    if (isset($_SESSION['idCliente'])) {
        $result['session'] = 1;

        // Se compara la acción a realizar cuando un cliente ha iniciado sesión.
        switch ($_GET['action']) {
            case 'getUser':
                //Si ambos datos se encuentran guardados cuando el cliente haga login,
                //Se mostrarán como el identificador del cliente que ha iniciado sesión
                //De lo contrario, se mostrará nulo
                if (isset($_SESSION['nombreCliente']) && isset($_SESSION['apellidoCliente'])) {
                    $result['status'] = 1;
                    $result['nombre'] = $_SESSION['nombreCliente'];
                    $result['apellido'] = $_SESSION['apellidoCliente'];
                    $result['username'] = $_SESSION['nombreCliente'] . ' ' . $_SESSION['apellidoCliente'];
                } else {
                    $result['error'] = 'Nombre de usuario indefinido';
                }
                break;


            case 'logOut':
                if (session_destroy()) {
                    $result['status'] = 1;
                    $result['message'] = 'Sesión eliminada correctamente';
                } else {
                    $result['error'] = 'Ocurrió un problema al cerrar la sesión';
                }
                break;
            case 'readProfile':
                if ($result['dataset'] = $cliente->readProfile()) {
                    $result['status'] = 1;
                } else {
                    $result['error'] = 'Ocurrió un problema al leer el perfil';
                }
                break;
            case 'checkCorreo':
                if ($cliente->checkCorreo($_POST['IngreseCorreo'])) {
                    $result['status'] = 1;
                } else {
                    $result['error'] = 'Correo no disponible';
                }
                break;
            case 'editProfile':
                $_POST = Validator::validateForm($_POST);
                if (
                    !$cliente->setNombre($_POST['nombreCliente']) or
                    !$cliente->setApellido($_POST['apellidoCliente']) or
                    !$cliente->setCorreo($_POST['correoCliente']) or
                    !$cliente->setDireccion($_POST['direccionCliente']) or
                    !$cliente->setDUI($_POST['duiCliente']) or
                    !$cliente->setTelefono($_POST['telefonoCliente'])
                ) {
                    $result['error'] = $cliente->getDataError();
                } elseif ($cliente->editProfile()) {
                    $result['status'] = 1;
                    $result['message'] = 'Perfil modificado correctamente';
                } else {
                    $result['error'] = 'Ocurrió un problema al modificar el perfil';
                }
                break;
            case 'changePassword':
                $_POST = Validator::validateForm($_POST);
                if (!$cliente->checkPassword($_POST['claveActual'])) {
                    $result['error'] = 'Contraseña actual incorrecta';
                } elseif ($_POST['claveNueva'] != $_POST['confirmarClave']) {
                    $result['error'] = 'Confirmación de contraseña diferente';
                } elseif (!$cliente->setClave($_POST['claveNueva'])) {
                    $result['error'] = $cliente->getDataError();
                } elseif ($cliente->changePassword()) {
                    $result['status'] = 1;
                    $result['message'] = 'Contraseña cambiada correctamente';
                } else {
                    $result['error'] = 'Ocurrió un problema al cambiar la contraseña';
                }
                break;

                //Evitamos el error de acción no disponible dentro de la sesión
            case 'logIn':
                $_POST = Validator::validateForm($_POST);
                if (!$cliente->checkUser($_POST['correoCliente'], $_POST['claveCliente'])) {
                    $result['error'] = 'Datos incorrectos';
                } else {
                    // Establece el ID del cliente antes de verificar el estado.
                    $cliente->setId($cliente->getIdByEmail($_POST['correoCliente']));

                    // Verificamos el estado del cliente.
                    if ($cliente->checkStatus()) {
                        // Configura la sesión ya que el estado es activo.
                        $_SESSION['idCliente'] = $cliente->getIdByEmail($_POST['correoCliente']);
                        $_SESSION['correoCliente'] = $_POST['correoCliente'];

                        // Recupera el nombre y apellido del cliente y lo guarda en la sesión.
                        $perfil = $cliente->readProfile();
                        $_SESSION['nombreCliente'] = $perfil['nombre_cliente']; //Asignamos el nombre del cliente
                        $_SESSION['apellidoCliente'] = $perfil['apellido_cliente']; //Asignamos el apellido del cliente

                        $result['status'] = 1;
                        $result['message'] = 'Autenticación correcta';
                    } else {
                        $result['error'] = 'La cuenta ha sido desactivada';
                    }
                }
                break;


            default:
                $result['error'] = 'Acción no disponible dentro de la sesión';
        }
    } else {
        // Se compara la acción a realizar cuando el cliente no ha iniciado sesión.
        switch ($_GET['action']) {
            case 'signUp':
                $_POST = Validator::validateForm($_POST);
                // Se establece la clave secreta para el reCAPTCHA de acuerdo con la cuenta de Google.
                $secretKey = '6LdBzLQUAAAAAL6oP4xpgMao-SmEkmRCpoLBLri-';
                // Se establece la dirección IP del servidor.
                /*$ip = $_SERVER['REMOTE_ADDR'];
                // Se establecen los datos del reCAPTCHA.
                $data = array('secret' => $secretKey, 'response' => $_POST['gRecaptchaResponse'], 'remoteip' => $ip);
                // Se establecen las opciones del reCAPTCHA.
                $options = array(
                    'http' => array('header' => 'Content-type: application/x-www-form-urlencoded\r\n', 'method' => 'POST', 'content' => http_build_query($data)),
                    'ssl' => array('verify_peer' => false, 'verify_peer_name' => false)
                );

                $url = 'https://www.google.com/recaptcha/api/siteverify';
                $context = stream_context_create($options);
                $response = file_get_contents($url, false, $context);
                $captcha = json_decode($response, true);
*/

                $token = $_POST['gRecaptchaResponse'];
                //$action = $_POST['action'];

                // call curl to POST request 
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => $secretKey, 'response' => $token)));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                $response = curl_exec($ch);
                curl_close($ch);
                $captcha = json_decode($response, true);
                if (!$captcha['success']) {
                    $result['recaptcha'] = 1;
                    $result['error'] = 'No eres humano';
                } elseif (!isset($_POST['condicion'])) {
                    $result['error'] = 'Debe marcar la aceptación de términos y condiciones';
                } elseif (
                    !$cliente->setNombre($_POST['nombreCliente']) or
                    !$cliente->setApellido($_POST['apellidoCliente']) or
                    !$cliente->setCorreo($_POST['correoCliente']) or
                    !$cliente->setDireccion($_POST['direccionCliente']) or
                    !$cliente->setDUI($_POST['duiCliente']) or
                    !$cliente->setTelefono($_POST['telefonoCliente']) or
                    !$cliente->setClave($_POST['claveCliente'])
                ) {
                    $result['error'] = $cliente->getDataError();
                } elseif ($_POST['claveCliente'] != $_POST['confirmarClave']) {
                    $result['error'] = 'Contraseñas diferentes';
                } elseif ($cliente->createRow()) {
                    $result['status'] = 1;
                    $result['message'] = 'Cuenta registrada correctamente';
                } else {
                    $result['error'] = 'Ocurrió un problema al registrar la cuenta';
                }
                break;


            case 'logIn':
                $_POST = Validator::validateForm($_POST);
                if (!$cliente->checkUser($_POST['correoCliente'], $_POST['claveCliente'])) {
                    $result['error'] = 'Datos incorrectos';
                } else {
                    // Establece el ID del cliente antes de verificar el estado.
                    $cliente->setId($cliente->getIdByEmail($_POST['correoCliente']));

                    // Verificamos el estado del cliente.
                    if ($cliente->checkStatus()) {
                        // Configura la sesión ya que el estado es activo.
                        $_SESSION['idCliente'] = $cliente->getIdByEmail($_POST['correoCliente']);
                        $_SESSION['correoCliente'] = $_POST['correoCliente'];

                        // Recupera el nombre y apellido del cliente y lo guarda en la sesión.
                        $perfil = $cliente->readProfile();
                        $_SESSION['nombreCliente'] = $perfil['nombre_cliente']; //Asignamos el nombre del cliente
                        $_SESSION['apellidoCliente'] = $perfil['apellido_cliente']; //Asignamos el apellido del cliente

                        $result['status'] = 1;
                        $result['message'] = 'Autenticación correcta';
                    } else {
                        $result['error'] = 'La cuenta ha sido desactivada';
                    }
                }
                break;


            case 'checkCorreo':
                if (!$cliente->setCorreo($_POST['IngreseCorreo'])) {
                    $result['error'] = $cliente->getDataError();
                } elseif ($result['dataset'] = $cliente->checkCorreo()) {
                    $result['status'] = 1;
                } else {
                    $result['error'] = 'Cliente inexistente';
                }
                break;
            case 'updateClave':
                $_POST = Validator::validateForm($_POST);
                if (
                    !$cliente->setCorreo($_POST['IngreseCorreo']) or
                    !$cliente->setClave($_POST['claveCliente'])
                ) {
                    $result['error'] = $cliente->getDataError();
                } elseif ($_POST['claveCliente'] != $_POST['confirmarClave']) {
                    $result['error'] = 'Contraseñas diferentes';
                } elseif ($cliente->updateClave()) {
                    $result['status'] = 1;
                    $result['message'] = 'Contraseña actualizada correctamente';
                } else {
                    $result['error'] = 'Ocurrió un problema al actualizar la contraseña';
                }
                break;

            case 'signUpMovil':
                $_POST = Validator::validateForm($_POST);
                if (
                    !$cliente->setNombre($_POST['nombreCliente']) or
                    !$cliente->setApellido($_POST['apellidoCliente']) or
                    !$cliente->setCorreo($_POST['correoCliente']) or
                    !$cliente->setDireccion($_POST['direccionCliente']) or
                    !$cliente->setDUI($_POST['duiCliente']) or
                    !$cliente->setTelefono($_POST['telefonoCliente']) or
                    !$cliente->setClave($_POST['claveCliente'])
                ) {
                    $result['error'] = $cliente->getDataError();
                } elseif ($_POST['claveCliente'] != $_POST['confirmarClave']) {
                    $result['error'] = 'Contraseñas diferentes';
                } elseif ($cliente->createRow()) {
                    $result['status'] = 1;
                    $result['message'] = 'Cuenta registrada correctamente';
                } else {
                    $result['error'] = 'Ocurrió un problema al registrar la cuenta';
                }
                break;



            default:
                $result['error'] = 'Acción no disponible fuera de la sesión';
        }
    }
    // Se obtiene la excepción del servidor de base de datos por si ocurrió un problema.
    $result['exception'] = Database::getException();
    // Se indica el tipo de contenido a mostrar y su respectivo conjunto de caracteres.
    header('Content-type: application/json; charset=utf-8');
    // Se imprime el resultado en formato JSON y se retorna al controlador.
    print(json_encode($result));
} else {
    print(json_encode('Recurso no disponible')); //
}
