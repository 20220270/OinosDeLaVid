<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/report.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se verifica si existe un valor para la categoría, de lo contrario se muestra un mensaje.
if (isset($_GET['idMarca'])) {
    // Se incluyen las clases para la transferencia y acceso a datos.
    require_once('../../models/data/marcas_data.php');
    require_once('../../models/data/producto_data.php');
    // Se instancian las entidades correspondientes.
    $marca = new MarcasData;
    $producto = new ProductoData;
    // Se establece el valor de la categoría, de lo contrario se muestra un mensaje.
    if ($marca->setId($_GET['idMarca']) && $producto->setMarca($_GET['idMarca'])) {
        // Se verifica si la categoría existe, de lo contrario se muestra un mensaje.
        if ($rowMarca = $marca->readOne()) {
            // Se inicia el reporte con el encabezado del documento.
            $pdf->startReport('Productos de la marca ' . $rowMarca['nombre_marca']);
            // Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
            if ($dataProductos = $producto->productosMarcas()) {
                // Se establece un color de relleno para los encabezados.
                $pdf->setFillColor(132, 6, 6);
                // Se establece la fuente para los encabezados.
                $pdf->setFont('Arial', 'B', 11);
                $pdf->setTextColor(255, 255, 255);
                // Se imprimen las celdas con los encabezados.
                $pdf->cell(90, 10, 'Nombre del producto', 1, 0, 'C', 1);
                $pdf->cell(35, 10, 'Existencias', 1, 0, 'C', 1);
                $pdf->cell(30, 10, 'Precio', 1, 0, 'C', 1);
                $pdf->cell(30, 10, 'Estado', 1, 1, 'C', 1);
                // Se establece la fuente para los datos de los productos.
                $pdf->setFont('Arial', '', 11);
                $pdf->setTextColor(0, 0, 0);
                // Se recorren los registros fila por fila.
                foreach ($dataProductos as $rowProducto) {
                    // Se imprimen las celdas con los datos de los productos.
                    $pdf->cell(90, 10, $pdf->encodeString($rowProducto['nombre_producto']), 1, 0, 'C');
                    $pdf->cell(35, 10, $rowProducto['existencias_producto'], 1, 0, 'C');
                    $pdf->cell(30, 10, '$' . $rowProducto['precio_producto'], 1, 0, 'C');
                    $pdf->cell(30, 10, $rowProducto['estado_producto'], 1, 1, 'C');
                }
            } else {
                $pdf->cell(0, 10, $pdf->encodeString('No hay productos para la marca'), 1, 1);
            }
            // Se llama implícitamente al método footer() y se envía el documento al navegador web.
            $pdf->output('I', 'marca.pdf');
        } else {
            print('Marca inexistente');
        }
    } else {
        print('Marca incorrecta');
    }
} else {
    print('Debe seleccionar una marca');
}
