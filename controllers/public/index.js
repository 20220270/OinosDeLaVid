// Constante para completar la ruta de la API.
const CATEGORIA_API = 'services/public/categorias.php';
// Constante para establecer el contenedor de categorías.
const CATEGORIAS = document.getElementById('categorias');
const MAIN_TITLE = document.getElementById('mainTitle');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    //loadTemplate();
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
                            <a href="${url}" class="btn btn-primary">Ver productos</a>
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
