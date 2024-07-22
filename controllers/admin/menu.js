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
        barGraph('chart1', categorias, cantidades, 'Cantidad de productos', 'Cantidad de productos por categoría');
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
        pieGraph('chart2', productos, promedios, 'Productos con mejor calificación');
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
        doughnutGraph('chart3', productos, ventas, 'Productos más vendidos');
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
        pieGraph('chart5', marcas, ventastotales, 'Total de ventas', 'Marcas más vendidas');
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
        doughnutGraph('chart6', producto, existencias, 'Productos con más existencias');
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
            let ganancias = [];
            let pérdidas = [];

            // Arreglo de nombres de meses.
            const meses = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];

            // Procesar datos de ganancias
            dataGanancias.dataset.forEach(row => {
                mesventas.push(meses[row.mes - 1]);
                ganancias.push(row.ganancias_mensuales);
            });

            // Procesar datos de pérdidas
            dataPerdidas.dataset.forEach(row => {
                // Suponiendo que el índice de mes coincide, sino deberás ajustar el código
                const mes = meses[row.anio - 1];
                if (mesventas.includes(mes)) {
                    const index = mesventas.indexOf(mes);
                    pérdidas[index] = row.perdidas_anuales; // Actualizar pérdidas para el mes
                } else {
                    mesventas.push(mes);
                    pérdidas.push(row.perdidas_anuales);
                }
            });

            // Asegurarse de que 'pérdidas' tenga el mismo tamaño que 'ganancias'
            while (pérdidas.length < ganancias.length) {
                pérdidas.push(0); // Rellenar con 0 si no hay datos de pérdidas para algunos meses
            }

            // Calcular las ganancias totales del año.
            const totalGanancias = ganancias.reduce((acc, val) => acc + Number(val), 0);
            const totalPerdidas = pérdidas.reduce((acc, val) => acc + Number(val), 0);

            // Llamada a la función para generar y mostrar un gráfico de líneas.
            lineGraph('chartPrediction', mesventas, ganancias, pérdidas, 'Ganancias por mes', 'Pérdidas por mes');

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


