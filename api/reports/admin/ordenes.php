<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/report.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/ordenes_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReportHorizontal('Ordenes registradas');
// Se instancia el módelo Categoría para obtener los datos.
$ordenes = new OrdenesData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataOrdenes = $ordenes->Ordenes()) {
    // Se establece un color de relleno para los encabezados.
    $pdf->setFillColor(132, 6, 6);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 10);
    $pdf->setTextColor(255, 255, 255);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(17, 10, 'Orden', 1, 0, 'C', 1);
    $pdf->cell(70, 10, 'Producto adquirido', 1, 0, 'C', 1);
    $pdf->cell(30, 10, 'Cantidad', 1, 0, 'C', 1);
    $pdf->cell(35, 10, 'Fecha de la orden', 1, 0, 'C', 1);
    $pdf->cell(32, 10, 'Estado', 1, 0, 'C', 1);
    $pdf->cell(65, 10, 'Cliente', 1, 1, 'C', 1);

    // Se establece un color de relleno para mostrar el nombre de la categoría.
    $pdf->setFillColor(240);
    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);
    $pdf->setTextColor(0, 0, 0);

    foreach ($dataOrdenes as $rowOrdenes) {
        // Guarda la posición inicial de Y


        // Imprime la celda de la orden
        $pdf->cell(17, 10, $pdf->encodeString($rowOrdenes['id_orden']), 1, 0, 'C');
        $pdf->cell(70, 10, $pdf->encodeString($rowOrdenes['nombre_producto']), 1, 0, 'C');
        $pdf->cell(30, 10, $pdf->encodeString($rowOrdenes['cantidad_producto']), 1, 0, 'C');
        $pdf->cell(35, 10, $pdf->encodeString($rowOrdenes['fecha_registro']), 1, 0, 'C');
        $pdf->cell(32, 10, $pdf->encodeString($rowOrdenes['estado_orden']), 1, 0, 'C');
        $pdf->cell(65, 10, $pdf->encodeString($rowOrdenes['correo_cliente']), 1, 1, 'C');

    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay ordenes para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'ordenes.pdf');
