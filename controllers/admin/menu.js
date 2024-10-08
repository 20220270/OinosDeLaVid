// Constante para completar la ruta de la API.
const PRODUCTO_API = 'services/admin/producto.php';
const ORDENES_API = 'services/admin/ordenes.php';

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    // Llamada a la funciones que generan los gráficos en la página web.
    graficoBarrasCategorias();
    graficoPastelProductos();
    graficoPastelProductoss();
    graficoBarrasClientes();
    graficoBarrasExistencias();
    graficoBarrasMarcasMasVendidas();
    graficoPredictivo();
});

/*
*   Función asíncrona para mostrar un gráfico de barras con la cantidad de productos por categoría.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const graficoBarrasCategorias = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'cantidadProductosCategoria');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a graficar.
        let categorias = [];
        let cantidades = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            categorias.push(row.nombre_categoria);
            cantidades.push(row.cantidad_producto);
        });
        // Llamada a la función para generar y mostrar un gráfico de barras. Se encuentra en el archivo components.js
        barGraph('chart1', categorias, cantidades, 'Cantidad de productos', 'Categoría con más productos registrados');
    } else {
        document.getElementById('chart1').remove();
        console.log(DATA.error);
    }
}


/*
*   Función asíncrona para mostrar un gráfico de pastel con el porcentaje de productos por categoría.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const graficoPastelProductos = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'productosConMejorRating');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a gráficar.
        let productos = [];
        let promedios = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            productos.push(row.nombre_producto);
            promedios.push(row.promedio_calificacion);
        });
        // Llamada a la función para generar y mostrar un gráfico de pastel. Se encuentra en el archivo components.js
        pieGraph('chart2', productos, promedios,  'Calificación promedio', 'Productos con mejor calificación (Escala 1 - 5)');
    } else {
        document.getElementById('chart2').remove();
        console.log(DATA.error);
    }
}


const graficoPastelProductoss = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'productosMasVendids');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a gráficar.
        let productos = [];
        let ventas = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            productos.push(row.nombre_producto);
            ventas.push(row.total_vendido);
        });
        // Llamada a la función para generar y mostrar un gráfico de pastel. Se encuentra en el archivo components.js
        doughnutGraph('chart3', productos, ventas, 'Total de ventas', 'Productos más vendidos');
    } else {
        document.getElementById('chart3').remove();
        console.log(DATA.error);
    }
}


const graficoBarrasClientes = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'clientesConMasCompras');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a graficar.
        let clientes = [];
        let compras = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            clientes.push(row.Cliente);
            compras.push(row.total_ordenes);
        });
        // Llamada a la función para generar y mostrar un gráfico de barras. Se encuentra en el archivo components.js
        horizontalBarGraph('chart4', clientes, compras, 'Total de compras', 'Clientes con más compras realizadas');
    } else {
        document.getElementById('chart4').remove();
        console.log(DATA.error);
    }
}

const graficoBarrasMarcasMasVendidas = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'MarcasMasVendidas');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a graficar.
        let marcas = [];
        let ventastotales = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            marcas.push(row.nombre_marca);
            ventastotales.push(row.total_vendido);
        });
        // Llamada a la función para generar y mostrar un gráfico de barras. Se encuentra en el archivo components.js
        pieGraph('chart5', marcas, ventastotales,  'Total de ventas', 'Marcas más vendidas');
    } else {
        document.getElementById('chart5').remove();
        console.log(DATA.error);
    }
}

const graficoBarrasExistencias = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'productosConMasExistencias');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a graficar.
        let producto = [];
        let existencias = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            producto.push(row.nombre_producto);
            existencias.push(row.existencias_producto);
        });
        // Llamada a la función para generar y mostrar un gráfico de barras. Se encuentra en el archivo components.js
        doughnutGraph('chart6', producto, existencias, 'Total de existencias', 'Productos con más existencias');
    } else {
        document.getElementById('chart6').remove();
        console.log(DATA.error);
    }
}

const graficoPredictivo = async () => {
    try {
        // Peticiones para obtener los datos de ganancias y pérdidas.
        const [dataGanancias, dataPerdidas] = await Promise.all([
            fetchData(ORDENES_API, 'predictGraph'),
            fetchData(ORDENES_API, 'perdidasPredictGraph')
        ]);

        if (dataGanancias.status && dataPerdidas.status) {
            // Arreglos para guardar los datos a graficar.
            let mesventas = [];
            let ganancias = Array(12).fill(0); // Inicializar con ceros para todos los meses
            let perdidas = Array(12).fill(0); // Inicializar con ceros para todos los meses

            // Arreglo de nombres de meses.
            const meses = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];

            // Procesar datos de ganancias
            dataGanancias.dataset.forEach(row => {
                mesventas.push(meses[row.mes - 1]);
                ganancias[row.mes - 1] = parseFloat(row.ganancias_mensuales);
            });

            // Procesar datos de pérdidas
            dataPerdidas.dataset.forEach(row => {
                perdidas[row.mes - 1] = parseFloat(row.perdidas_mensuales);
            });

            // Calcular las ganancias totales del año.
            const totalGanancias = parseFloat(dataGanancias.dataset[0].ganancias_totales_proyectadas);
            const totalPerdidas = parseFloat(dataPerdidas.dataset[0].perdidas_totales_proyectadas);

            // Añadir registros de depuración
            console.log('Ganancias Mensuales:', ganancias);
            console.log('Pérdidas Mensuales:', perdidas);
            console.log('Ganancias Totales Proyectadas:', totalGanancias);
            console.log('Pérdidas Totales Proyectadas:', totalPerdidas);

            // Llamada a la función para generar y mostrar un gráfico de líneas.
            lineGraph('chartPrediction', meses, ganancias, perdidas, 'Ganancias por mes (USD $)', 'Pérdidas por mes (USD $)');

            // Mostrar el total de ganancias y pérdidas del año en el label.
            document.getElementById('totalGanancias').textContent =
                `Ganancias totales estimadas para el año: $${totalGanancias.toFixed(2)}`;
            document.getElementById('totalPerdidas').textContent =
                `Pérdidas totales estimadas para el año: $${totalPerdidas.toFixed(2)}`;

        } else {
            document.getElementById('chartPrediction').remove();
            console.log(dataGanancias.error || dataPerdidas.error);
        }
    } catch (error) {
        console.error('Error en la petición de datos:', error);
    }
}










//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);


