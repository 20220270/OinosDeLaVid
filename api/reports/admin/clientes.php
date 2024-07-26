<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/report.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/cliente_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReportHorizontal('Clientes registrados');
// Se instancia el módelo Categoría para obtener los datos.
$cliente = new ClienteData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataCliente = $cliente->readAll()) {
    // Se establece un color de relleno para los encabezados.
    $pdf->setFillColor(132, 6, 6);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    $pdf->setTextColor(255, 255, 255);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(75, 10, 'Nombre', 1, 0, 'C', 1);
    $pdf->cell(65, 10, 'Correo', 1, 0, 'C', 1);
    $pdf->cell(33, 10, $pdf->encodeString('Teléfono'), 1, 0, 'C', 1);
    $pdf->cell(33, 10, 'Estado', 1, 0, 'C', 1);
    $pdf->cell(40, 10, 'Fecha de registro', 1, 1, 'C', 1);

    // Se establece un color de relleno para mostrar el nombre de la categoría.
    $pdf->setFillColor(240);
    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);
    $pdf->setTextColor(0, 0, 0);

    foreach ($dataCliente as $rowClientes) {
        // Se imprimen las celdas con los datos de los productos.
        $pdf->cell(75, 10, $pdf->encodeString($rowClientes['nombre_cliente']), 1, 0, 'C');
        $pdf->cell(65, 10, $rowClientes['correo_cliente'], 1, 0, 'C');
        $pdf->cell(33, 10, $rowClientes['telefono_cliente'], 1, 0, 'C');
        $pdf->cell(33, 10, $rowClientes['estado_cliente'], 1, 0, 'C');
        $pdf->cell(40, 10, $rowClientes['fecha_registro'], 1, 1, 'C');
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay clientes para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'clientes.pdf');
