//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);


// Constante para completar la ruta de la API.
const ADMINISTRADOR_API = 'services/admin/administrador.php';
const NIVELESUSUARIO_API = 'services/admin/nivelesusuario.php';
// Constante para establecer el formulario de buscar.
const SEARCH_FORM = document.getElementById('searchForm');
// Constantes para establecer los elementos de la tabla.
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');
// Constantes para establecer los elementos del componente Modal.
const SAVE_MODAL = new bootstrap.Modal('#saveModal'),
    MODAL_TITLE = document.getElementById('modalTitle');
// Constantes para establecer los elementos del formulario de guardar.
const SAVE_FORM = document.getElementById('saveForm'),
    ID_ADMINISTRADOR = document.getElementById('idAdministrador'),
    NOMBRE_ADMINISTRADOR = document.getElementById('nombreAdministrador'),
    APELLIDO_ADMINISTRADOR = document.getElementById('apellidoAdministrador'),
    CORREO_ADMINISTRADOR = document.getElementById('correoAdministrador'),
    ALIAS_ADMINISTRADOR = document.getElementById('aliasAdministrador'),
    CLAVE_ADMINISTRADOR = document.getElementById('claveAdministrador'),
    NIVEL_USUARIO = document.getElementById('selectNivelAdmin'),
    ESTADO_ADMINISTRADOR = document.getElementById('selectEstadoUsuario');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    //loadTemplate();
    // Se establece el título del contenido principal.
    //MAIN_TITLE.textContent = 'Gestionar categorías';
    // Llamada a la función para llenar la tabla con los registros existentes.
    fillTable();
});

// Método del evento para cuando se envía el formulario de buscar.
SEARCH_FORM.addEventListener('submit', (event) => {
  // Se evita recargar la página web después de enviar el formulario.
  event.preventDefault();
  // Constante tipo objeto con los datos del formulario.
  const FORM = new FormData(SEARCH_FORM);
  // Llamada a la función para llenar la tabla con los resultados de la búsqueda.
  fillTable(FORM);
});

// Método del evento para cuando se envía el formulario de guardar.
SAVE_FORM.addEventListener('submit', async (event) => {
  // Se evita recargar la página web después de enviar el formulario.
  event.preventDefault();
  // Se verifica la acción a realizar.
  (ID_ADMINISTRADOR.value) ? action = 'updateRow' : action = 'createRow';
  // Constante tipo objeto con los datos del formulario.
  const FORM = new FormData(SAVE_FORM);
  // Petición para guardar los datos del formulario.
  const DATA = await fetchData(ADMINISTRADOR_API, action, FORM);
  // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
  if (DATA.status) {
      // Se cierra la caja de diálogo.
      SAVE_MODAL.hide();
      // Se muestra un mensaje de éxito.
      sweetAlert(1, DATA.message, true);
      // Se carga nuevamente la tabla para visualizar los cambios.
      fillTable();
  } else {
      sweetAlert(2, DATA.error, false);
  }
});

const fillTable = async (form = null) => {
  // Se inicializa el contenido de la tabla.
  ROWS_FOUND.textContent = '';
  TABLE_BODY.innerHTML = '';
  // Se verifica la acción a realizar.
  (form) ? action = 'searchRows' : action = 'readAll';
  // Petición para obtener los registros disponibles.
  const DATA = await fetchData(ADMINISTRADOR_API, action, form);
  // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
  if (DATA.status) {
      console.log(DATA)
      // Se recorre el conjunto de registros fila por fila.
      DATA.dataset.forEach(row => {
          // Se crean y concatenan las filas de la tabla con los datos de cada registro.
          TABLE_BODY.innerHTML += `
              <tr>
                  <td>${row.id_administrador}</td>
                  <td>${row.nombre_admistrador}</td>
                  <td>${row.apellido_administrador}</td>
                  <td>${row.correo_administrador}</td>
                  <td>${row.alias_administrador}</td>
                  <td>${row.clave_administrador}</td>
                  <td>${row.nivel}</td>
                  <td>${row.fecha_registro}</td>
                  <td>${row.estado_adminstrador}</td>
                  <td>
                      

                    
                    <button type="submit" class="btn btn-success mt-1" id="btnEliminar" name="btnEliminar" onclick="openDelete(${row.id_administrador})">
                        <i class="bi bi-search"></i>
                        <img src="../../resources/Imagenes/btnEliminarIMG.png" alt="" width="30px" height="30px"
                            class="mb-1">

                    </button>
                    <button type="reset" class="btn btn-secondary mt-1" id="btnActualizar" name="btnActualizar" onclick="openUpdate(${row.id_administrador})">
                        <i class="bi bi-x-square-fill"></i>
                        <img src="../../resources/Imagenes/btnActualizarIMG.png" alt="" width="30px" height="30px"
                            class="mb-1">
                    </button>


                  </td>
              </tr>
          `;
      });
      // Se muestra un mensaje de acuerdo con el resultado.
      ROWS_FOUND.textContent = DATA.message;
  } else {
      sweetAlert(4, DATA.error, true);
  }
}

const openCreate = () => {
  // Se muestra la caja de diálogo con su título.
  SAVE_MODAL.show();
  MODAL_TITLE.textContent = 'Crear nuevo administrador';
  // Se prepara el formulario.
  SAVE_FORM.reset();

  fillSelect(NIVELESUSUARIO_API, 'readAll', 'selectNivelAdmin');
}

/*
*   Función asíncrona para preparar el formulario al momento de actualizar un registro.
*   Parámetros: id (identificador del registro seleccionado).
*   Retorno: ninguno.
*/
const openUpdate = async (id) => {
  // Se define una constante tipo objeto con los datos del registro seleccionado.
  const FORM = new FormData();
  FORM.append('idAdministrador', id);
  // Petición para obtener los datos del registro solicitado.
  const DATA = await fetchData(ADMINISTRADOR_API, 'readOne', FORM);
  // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
  if (DATA.status) {
      // Se muestra la caja de diálogo con su título.
      SAVE_MODAL.show();
      MODAL_TITLE.textContent = 'Actualizar administrador';
      // Se prepara el formulario.
      SAVE_FORM.reset();
      // Se inicializan los campos con los datos.
      const ROW = DATA.dataset;
      ID_ADMINISTRADOR.value = ROW.id_administrador;
      NOMBRE_ADMINISTRADOR.value = ROW.nombre_admistrador;
      APELLIDO_ADMINISTRADOR.value = ROW.apellido_administrador
      CORREO_ADMINISTRADOR.value = ROW.correo_administrador;
      ALIAS_ADMINISTRADOR.value = ROW.alias_administrador;
      CLAVE_ADMINISTRADOR.value = ROW.clave_administrador;
      NIVEL_USUARIO.value = ROW.nivel;
      ESTADO_ADMINISTRADOR.value = ROW.estado_adminstrador;

      fillSelect(NIVELESUSUARIO_API, 'readAll', 'selectNivelAdmin', ROW.nivel);
      
  } else {
      sweetAlert(2, DATA.error, false);
  }
}

/*
*   Función asíncrona para eliminar un registro.
*   Parámetros: id (identificador del registro seleccionado).
*   Retorno: ninguno.
*/
const openDelete = async (id) => {
  // Llamada a la función para mostrar un mensaje de confirmación, capturando la respuesta en una constante.
  const RESPONSE = await confirmAction('¿Desea eliminar este administrador de forma permanente?');
  // Se verifica la respuesta del mensaje.
  if (RESPONSE) {
      // Se define una constante tipo objeto con los datos del registro seleccionado.
      const FORM = new FormData();
      FORM.append('idAdministrador', id);
      // Petición para eliminar el registro seleccionado.
      const DATA = await fetchData(ADMINISTRADOR_API, 'deleteRow', FORM);
      // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
      if (DATA.status) {
          // Se muestra un mensaje de éxito.
          await sweetAlert(1, DATA.message, true);
          // Se carga nuevamente la tabla para visualizar los cambios.
          fillTable();
      } else {
          sweetAlert(2, DATA.error, false);
      }
  }
}






