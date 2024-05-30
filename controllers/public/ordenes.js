const ORDENES_API = 'services/admin/ordenes.php';
const PRODUCTOS_API = 'services/admin/producto.php';
const SEARCH_FORM = document.getElementById('searchForm');
// Constantes para establecer los elementos de la tabla.
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');


document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    
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
                  <td>${row.id_orden}</td>
                  <td>${row.nombre_cliente}</td>
                  <td>${row.direccion_orden}</td>
                  <td>${row.fecha_registro}</td>
                  <td>${row.estado_orden}</td>
                  <td>
                      

                    
                    <button type="submit" class="btn btn-success mt-1" id="btnEliminar" name="btnEliminar" onclick="openDelete(${row.id_orden})">
                        <i class="bi bi-search"></i>
                        <img src="../../resources/Imagenes/btnEliminarIMG.png" alt="" width="30px" height="30px"
                            class="mb-1">

                    </button>
                    <button type="submit" class="btn btn-secondary mt-1" id="btnActualizar" name="btnActualizar" onclick="openUpdate(${row.id_orden})">
                        <i class="bi bi-x-square-fill"></i>
                        <img src="../../resources/Imagenes/btnActualizarIMG.png" alt="" width="30px" height="30px"
                            class="mb-1">
                    </button>

                    <button type="submit" class="btn mt-1" id="btnDetalles" name="btnDetalles" onclick="openDetail(${row.id_orden})">
                    <i class="bi bi-x-square-fill"></i>
                    <img src="../../resources/Imagenes/btnDetalles.png" alt="" width="30px" height="30px"
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