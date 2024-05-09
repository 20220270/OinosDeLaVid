<?php
// Se incluye la clase del modelo.
require_once('../../models/data/marcas_data.php');

// Se comprueba si existe una acción a realizar, de lo contrario se finaliza el script con un mensaje de error.
if (isset($_GET['action'])) {
    // Se crea una sesión o se reanuda la actual para poder utilizar variables de sesión en el script.
    session_start();
    // Se instancia la clase correspondiente.
    $marcas = new MarcasData;
    // Se declara e inicializa un arreglo para guardar el resultado que retorna la API.
    $result = array('status' => 0, 'message' => null, 'dataset' => null, 'error' => null, 'exception' => null, 'fileStatus' => null);
    // Se verifica si existe una sesión iniciada como administrador, de lo contrario se finaliza el script con un mensaje de error.
    if (isset($_SESSION['idAdministrador'])) {
        // Se compara la acción a realizar cuando un administrador ha iniciado sesión.
        switch ($_GET['action']) {
            case 'searchRows':
                if (!Validator::validateSearch($_POST['search'])) {
                    $result['error'] = Validator::getSearchError();
                } elseif ($result['dataset'] = $marcas->searchRows()) {
                    $result['status'] = 1;
                    $result['message'] = 'Existen ' . count($result['dataset']) . ' coincidencias';
                } else {
                    $result['error'] = 'No hay coincidencias';
                }
                break;
            case 'createRow':
                $_POST = Validator::validateForm($_POST);
                if (
                    !$marcas->setNombre($_POST['nombreMarca']) or
                    !$marcas->setLogo($_FILES['inputImgMarca'])
                ) {
                    $result['error'] = $marcas->getDataError();
                } elseif ($marcas->createRow()) {
                    $result['status'] = 1;
                    $result['message'] = 'Marca registrada correctamente';
                    // Se asigna el estado del archivo después de insertar.
                    $result['fileStatus'] = Validator::saveFile($_FILES['inputImgMarca'], $marcas::RUTA_IMAGEN);
                } else {
                    $result['error'] = 'Ocurrió un problema al registrar la marca';
                }
                break;
            case 'readAll':
                if ($result['dataset'] = $marcas->readAll()) {
                    $result['status'] = 1;
                    $result['message'] = 'Existen ' . count($result['dataset']) . ' registros';
                } else {
                    $result['error'] = 'No existen marcas registradas';
                }
                break;
            case 'readOne':
                if (!$marcas->setId($_POST['idMarca'])) {
                    $result['error'] = $marcas->getDataError();
                } elseif ($result['dataset'] = $marcas->readOne()) {
                    $result['status'] = 1;
                } else {
                    $result['error'] = 'Marca inexistente';
                }
                break;
            case 'updateRow':
                $_POST = Validator::validateForm($_POST);
                if (
                    !$marcas->setId($_POST['idMarca']) or
                    !$marcas->setFilename() or
                    !$marcas->setNombre($_POST['nombreMarca']) or
                    !$marcas->setLogo($_FILES['inputImgMarca'], $marcas->getFilename())
                ) {
                    $result['error'] = $marcas->getDataError();
                } elseif ($marcas->updateRow()) {
                    $result['status'] = 1;
                    $result['message'] = 'Marca modificada correctamente';
                    // Se asigna el estado del archivo después de actualizar.
                    $result['fileStatus'] = Validator::changeFile($_FILES['inputImgMarca'], $marcas::RUTA_IMAGEN, $marcas->getFilename());
                } else {
                    $result['error'] = 'Ocurrió un problema al modificar la marca';
                }
                break;
            case 'deleteRow':
                if (
                    !$marcas->setId($_POST['idMarca']) or
                    !$marcas->setFilename()
                ) {
                    $result['error'] = $marcas->getDataError();
                } elseif ($marcas->deleteRow()) {
                    $result['status'] = 1;
                    $result['message'] = 'Marca eliminada correctamente';
                    // Se asigna el estado del archivo después de eliminar.
                    $result['fileStatus'] = Validator::deleteFile($marcas::RUTA_IMAGEN, $marcas->getFilename());
                } else {
                    $result['error'] = 'Ocurrió un problema al eliminar la marca';
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
