
const ORDENES_API = 'services/public/ordenes.php';
const PRODUCTOS_API = 'services/public/productos.php';

const SEARCH_FORM = document.getElementById('searchForm');
// Constantes para establecer los elementos de la tabla.
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');


document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    // Se establece el título del contenido principal.
    //MAIN_TITLE.textContent = 'Editar perfil';
    // Petición para obtener los datos del usuario que ha iniciado sesión.
    fillTable();
});

const fillTable = async (form = null) => {
    // Se inicializa el contenido de la tabla.
    ROWS_FOUND.textContent = '';
    TABLE_BODY.innerHTML = '';
    // Se verifica la acción a realizar.
    (form) ? action = 'searchRows' : action = 'myOrders';
    // Petición para obtener los registros disponibles.
    const DATA = await fetchData(ORDENES_API, action, form);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se recorre el conjunto de registros fila por fila.
        DATA.dataset.forEach(row => {
            // Se crean y concatenan las filas de la tabla con los datos de cada registro.
            TABLE_BODY.innerHTML += `
              <tr>
                  <td>${row.id_detalle}</td>
                  <td>${row.id_orden}</td>
                  <td><img src="${SERVER_URL}images/productos/${row.imagen_producto}" class="" height="150px" width="150px"></td>
                  <td>${row.nombre_producto}</td>
                  <td>${row.precio_producto}</td>
                  <td>${row.cantidad_producto}</td>
                  <td>${row.total_a_pagar}</td>
                  <td>${row.fecha_registro}</td>
                  <td>${row.estado_orden}</td>
                  <td>

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
