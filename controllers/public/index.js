// Constante para completar la ruta de la API.
const CATEGORIA_API = 'services/public/categorias.php';
const MARCAS_API = 'services/public/marcas.php';

const SEARCH_FORM = document.getElementById('searchForm');

// Constante para establecer el contenedor de categorías.
const CATEGORIAS = document.getElementById('categorias');
const MAIN_TITLE = document.getElementById('mainTitle');

// Constante para establecer el contenedor de marcas.
const MARCAS = document.getElementById('marcas');
const MAIN_TITLE2 = document.getElementById('mainTitle2');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    // Se establece el título del contenido principal.
    MAIN_TITLE.textContent = 'Productos por categoría';
    // Petición para obtener las categorías disponibles.
    const DATA = await fetchData(CATEGORIA_API, 'readAll');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se inicializa el contenedor de categorías.
        CATEGORIAS.innerHTML = '';
        // Variable para controlar si es el primer elemento del carrusel.
        let isActive = 'active';
        // Se agrupan las categorías en grupos de 4 para cada item del carrusel.
        let rowContent = '';
        let counter = 0;

        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach((row, index) => {
            // Se establece la página web de destino con los parámetros.
            let url = `productos.html?id=${row.id_categoria}&nombre=${row.nombre_categoria}`;
            // Se crean las tarjetas con los datos de cada categoría.
            let card = `
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card mb-3">
                        <img src="${SERVER_URL}images/categorias/${row.imagen_categoria}" class="card-img-top" alt="${row.nombre_categoria}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${row.nombre_categoria}</h5>
                            <p class="card-text">${row.descripcion_categoria}</p>
                            <a href="${url}" class="btn"  id="btnVerProductos"><img src="../../resources/Imagenes/verProductoss.png" class="me-2" alt="..."
                            width="25px" height="25px">Ver productos</a>
                        </div>
                    </div>
                </div>
            `;

            // Agrega la tarjeta al contenido de la fila actual.
            rowContent += card;
            counter++;

            // Cada 4 tarjetas, se crea un nuevo item del carrusel.
            if (counter === 4 || index === DATA.dataset.length - 1) {
                CATEGORIAS.innerHTML += `
                    <div class="carousel-item ${isActive}">
                        <div class="row">
                            ${rowContent}
                        </div>
                    </div>
                `;
                // Reinicia las variables para la próxima fila.
                rowContent = '';
                counter = 0;
                isActive = ''; // Solo el primer item debe tener la clase "active".
            }
        });
    } else {
        // Se asigna al título del contenido de la excepción cuando no existen datos para mostrar.
        MAIN_TITLE.textContent = DATA.error;
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    //loadTemplate();
    // Se establece el título del contenido principal.
    MAIN_TITLE2.textContent = 'Marcas asociadas';
    // Petición para obtener las marcas disponibles.
    const DATA = await fetchData(MARCAS_API, 'readAll');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se inicializa el contenedor de marcas.
        MARCAS.innerHTML = '';
        // Variable para controlar si es el primer elemento del carrusel.
        let isActive = 'active';
        // Se agrupan las marcas en grupos de 4 para cada item del carrusel.
        let rowContent = '';
        let counter = 0;

        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach((row, index) => {
            // Se establece la página web de destino con los parámetros.
            
            // Se crean las tarjetas con los datos de cada marcas.
            let card = `
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card mb-3">
                        <img src="${SERVER_URL}images/marcas/${row.logo_marca}" class="card-img-top" alt="${row.nombre_marca}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${row.nombre_marca}</h5>
                        </div>
                    </div>
                </div>
            `;

            // Agrega la tarjeta al contenido de la fila actual.
            rowContent += card;
            counter++;

            // Cada 4 tarjetas, se crea un nuevo item del carrusel.
            if (counter === 4 || index === DATA.dataset.length - 1) {
                MARCAS.innerHTML += `
                    <div class="carousel-item ${isActive}">
                        <div class="row">
                            ${rowContent}
                        </div>
                    </div>
                `;
                // Reinicia las variables para la próxima fila.
                rowContent = '';
                counter = 0;
                isActive = ''; // Solo el primer item debe tener la clase "active".
            }
        });
    } else {
        // Se asigna al título del contenido de la excepción cuando no existen datos para mostrar.
        MAIN_TITLE2.textContent = DATA.error;
    }
});

