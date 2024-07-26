

// Constante para completar la ruta de la API.
const ORDENES_API = 'services/admin/ordenes.php';
const PRODUCTOS_API = 'services/admin/producto.php';
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
    ID_ORDEN = document.getElementById('idOrden'),
    ESTADO_ORDEN = document.getElementById('selectEstadoOrden');
// Constantes para establecer los elementos del formulario del detalle.
const DETALLE_FORM = new bootstrap.Modal('#detailModal'),
    DETAIL_FORM = document.getElementById('detailForm')
const TABLE_BODY2 = document.getElementById('tableBody2'),
    ROWS_FOUND2 = document.getElementById('rowsFound2');
ID_DETALLE = document.getElementById('idDetalle'),
    MODAL_TITLED = document.getElementById('modalTitleD');
IMAGEN_PRODUCTO = document.getElementById('imagenProductoDetalle');
NOMBRE_PRODUCTO = document.getElementById('nombreProductoDetalle'),
    PRECIO_PRODUCTO = document.getElementById('precioProductoDetalle'),
    CANTIDAD_PRODUCTO = document.getElementById('cantidadProductoDetalle'),
    TOTAL_PAGADO = document.getElementById('TotalPagadoProductoDetalle');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
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
    (ID_ORDEN.value) ? action = 'updateRow' : action = 'createRow';
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(SAVE_FORM);
    // Petición para guardar los datos del formulario.
    const DATA = await fetchData(ORDENES_API, action, FORM);
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

                

                            <!--Botón para generar un reporte de todos los productos-->
                            <button class="btn fw-semibold" id="btnRegistrar" name="btnRegistrar"
                                onclick="openReport(${row.id_orden})">

                                <img src="../../resources/Imagenes/report.png" alt="" width="60px" height="60px"
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


/*
*   Función asíncrona para preparar el formulario al momento de actualizar un registro.
*   Parámetros: id (identificador del registro seleccionado).
*   Retorno: ninguno.
*/
const openUpdate = async (id) => {
    // Se define una constante tipo objeto con los datos del registro seleccionado.
    const FORM = new FormData();
    FORM.append('idOrden', id);
    // Petición para obtener los datos del registro solicitado.
    const DATA = await fetchData(ORDENES_API, 'readOne', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se muestra la caja de diálogo con su título.
        SAVE_MODAL.show();
        MODAL_TITLE.textContent = 'Actualizar estado de la orden';
        // Se prepara el formulario.
        SAVE_FORM.reset();
        // Se inicializan los campos con los datos.
        const ROW = DATA.dataset;
        ID_ORDEN.value = ROW.id_orden;
        ESTADO_ORDEN.value = ROW.estado_orden;

    } else {
        sweetAlert(2, DATA.error, false);
    }
}

//Metodo para visualizar el detalle de cada orden
const openDetail = async (id) => {
    ROWS_FOUND2.textContent = '';
    TABLE_BODY2.innerHTML = '';
    // Se define una constante tipo objeto con los datos del registro seleccionado.
    const FORM = new FormData();
    FORM.append('idOrden', id);
    // Petición para obtener los datos del registro solicitado.
    const DATA = await fetchData(ORDENES_API, 'readDetails', FORM);

    console.log(DATA);

    let totalCompra = 0; // Variable para almacenar el total de la compra

    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se recorre el conjunto de registros fila por fila.
        DATA.dataset.forEach(row => {
            // Se crean y concatenan las filas de la tabla con los datos de cada registro.
            TABLE_BODY2.innerHTML += `
                <tr>
                    <td>${row.id_detalle}</td>
                    <td><img src="${SERVER_URL}images/productos/${row.imagen_producto}" alt="..." width="200px" height="200px" name="imagenProductoDetalle"
                    id="imagenProductoDetalle"></td>
                    <td>${row.nombre_producto}</td>
                    <td>$${row.precio_producto}</td>
                    <td>${row.cantidad_producto}</td>
                    <td>${row.descuento_producto}%</td>
                    <td>$${row.SubtotalConDescuento}</td>
                </tr>
            `;
            totalCompra += parseFloat(row.SubtotalConDescuento); // Sumar el subtotal con descuento al total
        });
        // Se muestra un mensaje de acuerdo con el resultado.
        ROWS_FOUND.textContent = DATA.message;
    } else {
        sweetAlert(4, DATA.error, true);
    }

    // Asignar el total de la compra a la fila correspondiente
    TABLE_BODY2.innerHTML += `
        <tr>
            <td colspan="6" class="bg-danger text-white fw-bold">Total de la compra</td>
            <td class="bg-danger text-white fw-bold">$${totalCompra.toFixed(2)}</td>
        </tr>
    `;

    // Se muestra la caja de diálogo con su título.
    DETALLE_FORM.show();
    MODAL_TITLED.textContent = 'Detalles del pedido';

    // Se prepara el formulario.
    DETAIL_FORM.reset();
    // Se inicializan los campos con los datos.
    const ROW = DATA.dataset;
    ID_DETALLE.value = ROW.id_detalle;
};


const openReport = (id) => {
    // Se declara una constante tipo objeto con la ruta específica del reporte en el servidor.
    const PATH = new URL(`${SERVER_URL}reports/admin/ordenes.php`);
    PATH.searchParams.append('idOrden', id);
    console.log(id);
    // Se abre el reporte en una nueva pestaña.
    window.open(PATH.href);
}



localStorage.setItem('paginaOrigen', window.location.href);





