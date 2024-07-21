<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/report.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/ordenes_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;

$ordenes = new OrdenesData;

// Obtener el mes y el año actual
$mes = date('n'); // Mes actual sin ceros a la izquierda
$anio = date('Y'); // Año actual

// Convertir el número del mes a nombre del mes
$meses = [
    1 => 'Enero', 2 => 'Febrero', 3 => 'Marzo', 4 => 'Abril',
    5 => 'Mayo', 6 => 'Junio', 7 => 'Julio', 8 => 'Agosto',
    9 => 'Septiembre', 10 => 'Octubre', 11 => 'Noviembre', 12 => 'Diciembre'
];
$nombreMes = $meses[$mes]; // Nombre del mes correspondiente

// Se inicia el reporte con el encabezado del documento.
$pdf->startReportHorizontal("Órdenes registradas en el mes de $nombreMes $anio");

// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataOrdenes = $ordenes->Ordenes($mes, $anio)) {
    // Se establece un color de relleno para los encabezados.
    $pdf->setFillColor(132, 6, 6);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    $pdf->setTextColor(255, 255, 255);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(17, 10, 'Orden', 1, 0, 'C', 1);
    $pdf->cell(62, 10, 'Producto y cantidad', 1, 0, 'C', 1);
    $pdf->cell(35, 10, 'Fecha de la orden', 1, 0, 'C', 1);
    $pdf->cell(23, 10, 'Estado', 1, 0, 'C', 1);
    $pdf->cell(44, 10, 'Direccion', 1, 0, 'C', 1);
    $pdf->cell(63, 10, 'Cliente', 1, 1, 'C', 1);

    // Se establece un color de relleno para mostrar el nombre de la categoría.
    $pdf->setFillColor(240);
    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);
    $pdf->setTextColor(0, 0, 0);

    foreach ($dataOrdenes as $rowOrdenes) {
        // Guarda la posición inicial de Y
        $yStart = $pdf->GetY();

        // Imprime la celda de la orden
        $pdf->cell(17, 10, $pdf->encodeString($rowOrdenes['id_orden']), 1, 0, 'C');

        // Imprime la MultiCell para los productos
        $pdf->SetX(32); // Ajusta la posición X para la celda de productos
        $pdf->MultiCell(62, 10, $pdf->encodeString($rowOrdenes['productos']), 1, 'C');

        // Obtiene la altura total ocupada por la MultiCell
        $height = $pdf->GetY() - $yStart;

        // Ajusta la posición para las siguientes celdas
        $pdf->SetXY(94, $yStart);
        $pdf->cell(35, $height, $rowOrdenes['fecha_registro'], 1, 0, 'C');
        $pdf->cell(23, $height, $rowOrdenes['estado_orden'], 1, 0, 'C');
        $pdf->MultiCell(44, $height, $rowOrdenes['direccion_orden'], 1, 'C');


        // Ajusta la posición para la celda del cliente
        $pdf->SetXY(196, $yStart);
        $pdf->cell(63, $height, $rowOrdenes['correo_cliente'], 1, 1, 'C');
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay ordenes para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'ordenes.pdf');
