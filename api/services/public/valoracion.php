<?php
// Se incluye la clase del modelo.
require_once('../../models/data/valoracion_data.php');

// Se comprueba si existe una acción a realizar, de lo contrario se finaliza el script con un mensaje de error.
if (isset($_GET['action'])) {
    // Se crea una sesión o se reanuda la actual para poder utilizar variables de sesión en el script.
    session_start();
    // Se instancia la clase correspondiente.
    $valoracion = new ValoracionData;
    // Se declara e inicializa un arreglo para guardar el resultado que retorna la API.
    $result = array('status' => 0, 'message' => null, 'dataset' => null, 'error' => null, 'exception' => null, 'fileStatus' => null);
    // Se verifica si existe una sesión iniciada como administrador, de lo contrario se finaliza el script con un mensaje de error.
    if (isset($_SESSION['idCliente'])) {
        // Se compara la acción a realizar cuando un administrador ha iniciado sesión.
        switch ($_GET['action']) {
                case 'createRating':
                    $_POST = Validator::validateForm($_POST);
                   
                    if (
                        !$valoracion->setCalificacion($_POST['calificacion']) or
                        !$valoracion->setComentario($_POST['comentario']) or
                        !$valoracion->setIdDetalle($_POST['idDetalle']) 
                    ) {
                        $result['error'] = $valoracion->getDataError();
                    } elseif ($valoracion->createRating()) {
                        $result['status'] = 1;
                        $result['message'] = 'Valoracion enviada correctamente';
                    } else {
                        $result['error'] = 'Ocurrió un problema al enviar la valoracion';
                    }
                    break;
            default:
                $result['error'] = 'Acción no disponible dentro de la sesión';
        }
        // Se obtiene la excepción del servidor de base de datos por si ocurrió un problema.
        $result['exception'] = Database::getException();
        // Se indica el tipo de contenido a mostrar y su respectivo conjunto de caracteres.
        header('Content-type: application/json; charset=utf-8');
        // Se imprime el resultado en formato JSON y se retorna al controlador.
        print(json_encode($result));
    } else {
        print(json_encode('Acceso denegado'));
    }
} else {
    print(json_encode('Recurso no disponible'));
}
