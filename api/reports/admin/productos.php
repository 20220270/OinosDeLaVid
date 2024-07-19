<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/report.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/producto_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReportHorizontal('Producto registrados');
// Se instancia el módelo Categoría para obtener los datos.
$producto = new ProductoData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataProductos = $producto->readAll()) {
    // Se establece un color de relleno para los encabezados.
    $pdf->setFillColor(132, 6, 6);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    $pdf->setTextColor(255, 255, 255);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(68, 10, 'Nombre', 1, 0, 'C', 1);
    $pdf->cell(31, 10, 'Precio', 1, 0, 'C', 1);
    $pdf->cell(35, 10, 'Descuento', 1, 0, 'C', 1);
    $pdf->cell(40, 10, 'Existencias', 1, 0, 'C', 1);
    $pdf->cell(33, 10, 'Estado', 1, 0, 'C', 1);
    $pdf->cell(40, 10, 'Fecha de registro', 1, 1, 'C', 1);

    // Se establece un color de relleno para mostrar el nombre de la categoría.
    $pdf->setFillColor(240);
    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);
    $pdf->setTextColor(0, 0, 0);

    foreach ($dataProductos as $rowProducto) {
        // Se imprimen las celdas con los datos de los productos.
        $pdf->cell(68, 10, $pdf->encodeString($rowProducto['nombre_producto']), 1, 0, 'C');
        $pdf->cell(31, 10, '$' . $rowProducto['precio_producto'], 1, 0, 'C');
        $pdf->cell(35, 10, $rowProducto['descuento_producto'] . '%', 1, 0, 'C');
        $pdf->cell(40, 10, $rowProducto['existencias_producto'], 1, 0, 'C');
        $pdf->cell(33, 10, $rowProducto['estado_producto'], 1, 0, 'C');
        $pdf->cell(40, 10, $rowProducto['fecha_registro'], 1, 1, 'C');
        
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay productos para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'productos.pdf');
