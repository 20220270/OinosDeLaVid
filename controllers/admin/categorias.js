// Constante para completar la ruta de la API.
const CATEGORIA_API = 'services/admin/categoria.php';
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
    ID_CATEGORIA = document.getElementById('idCategoria'),
    NOMBRE_CATEGORIA = document.getElementById('nombreCategoria'),
    DESCRIPCION_CATEGORIA = document.getElementById('descripcionCategoria'),
    IMAGEN_CATEGORIA = document.getElementById('inputImgCat');

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
  (ID_CATEGORIA.value) ? action = 'updateRow' : action = 'createRow';
  // Constante tipo objeto con los datos del formulario.
  const FORM = new FormData(SAVE_FORM);
  // Petición para guardar los datos del formulario.
  const DATA = await fetchData(CATEGORIA_API, action, FORM);
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
  const DATA = await fetchData(CATEGORIA_API, action, form);
  // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
  if (DATA.status) {
      console.log(DATA)
      // Se recorre el conjunto de registros fila por fila.
      DATA.dataset.forEach(row => {
          // Se crean y concatenan las filas de la tabla con los datos de cada registro.
          TABLE_BODY.innerHTML += `
              <tr>
                  <td>${row.id_categoria}</td>
                  <td>${row.nombre_categoria}</td>
                  <td>${row.descripcion_categoria}</td>
                  <td><img src="${SERVER_URL}images/categorias/${row.imagen_categoria}" height="50"></td>
                  <td>
                      

                    
                    <button type="submit" class="btn btn-success mt-1" id="btnEliminar" name="btnEliminar" onclick="openDelete(${row.id_categoria})">
                        <i class="bi bi-search"></i>
                        <img src="../../resources/Imagenes/btnEliminarIMG.png" alt="" width="30px" height="30px"
                            class="mb-1">

                    </button>
                    <button type="reset" class="btn btn-secondary mt-1" id="btnActualizar" name="btnActualizar" onclick="openUpdate(${row.id_categoria})">
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
  MODAL_TITLE.textContent = 'Crear categoría';
  // Se prepara el formulario.
  SAVE_FORM.reset();
}

/*
*   Función asíncrona para preparar el formulario al momento de actualizar un registro.
*   Parámetros: id (identificador del registro seleccionado).
*   Retorno: ninguno.
*/
const openUpdate = async (id) => {
  // Se define una constante tipo objeto con los datos del registro seleccionado.
  const FORM = new FormData();
  FORM.append('idCategoria', id);
  // Petición para obtener los datos del registro solicitado.
  const DATA = await fetchData(CATEGORIA_API, 'readOne', FORM);
  // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
  if (DATA.status) {
      // Se muestra la caja de diálogo con su título.
      SAVE_MODAL.show();
      MODAL_TITLE.textContent = 'Actualizar categoría';
      // Se prepara el formulario.
      SAVE_FORM.reset();
      // Se inicializan los campos con los datos.
      const ROW = DATA.dataset;
      ID_CATEGORIA.value = ROW.id_categoria;
      NOMBRE_CATEGORIA.value = ROW.nombre_categoria;
      DESCRIPCION_CATEGORIA.value = ROW.descripcion_categoria;
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
  const RESPONSE = await confirmAction('¿Desea eliminar la categoría de forma permanente?');
  // Se verifica la respuesta del mensaje.
  if (RESPONSE) {
      // Se define una constante tipo objeto con los datos del registro seleccionado.
      const FORM = new FormData();
      FORM.append('idCategoria', id);
      // Petición para eliminar el registro seleccionado.
      const DATA = await fetchData(CATEGORIA_API, 'deleteRow', FORM);
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


localStorage.setItem('paginaOrigen', window.location.href);





