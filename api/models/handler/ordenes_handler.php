<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php');
/*
 *  Clase para manejar el comportamiento de los datos de la tabla CATEGORIA.
 */
class OrdenesHandler
{
    /*
     *  Declaración de atributos para el manejo de datos.
     */
    protected $idorden = null;
    protected $iddetalle = null;
    protected $nombrecliente = null;
    protected $imagenproducto = null;
    protected $estadoorden = null;
    protected $direccion = null;
    protected $producto = null;
    protected $precioproducto = null;
    protected $cantidad = null;
    protected $fecha = null;
    protected $total = null;

    // Constante para establecer la ruta de las imágenes a mostrar.
    const RUTA_IMAGEN = '../../images/productos/';

    /*
     *  Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
     */
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = "SELECT id_orden, CONCAT(nombre_cliente, ' ', apellido_cliente) as nombre_cliente, estado_orden, direccion_orden, p.fecha_registro FROM tb_ordenes p
                INNER JOIN tb_clientes USING(id_cliente)
                WHERE CONCAT(nombre_cliente, ' ', apellido_cliente) LIKE ? OR estado_orden LIKE ? OR direccion_orden LIKE ? OR p.fecha_registro LIKE ?
                ORDER BY id_orden";
        $params = array($value, $value, $value, $value);
        return Database::getRows($sql, $params);
    }

    public function readAll()
    {
        $sql = "SELECT id_orden, CONCAT(nombre_cliente, ' ', apellido_cliente) as nombre_cliente, estado_orden, direccion_orden, p.fecha_registro FROM tb_ordenes p
        INNER JOIN tb_clientes USING(id_cliente)
                ORDER BY id_orden";
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_orden, nombre_cliente, apellido_cliente, estado_orden, direccion_orden, p.fecha_registro FROM tb_ordenes p
        INNER JOIN tb_clientes USING(id_cliente)
                WHERE id_orden = ?';
        $params = array($this->idorden);
        return Database::getRow($sql, $params);
    }

    public function updateRow()
    {
        $sql = 'UPDATE tb_ordenes
                SET estado_orden = ?
                WHERE id_orden = ?';
        $params = array($this->estadoorden, $this->idorden);
        return Database::executeRow($sql, $params);
    }


    //Funcion para el sitio privado: Leer los detalles de cada compra
    public function readDetails()
    {
        $sql = 'SELECT id_detalle, nombre_producto, imagen_producto, tb_productos.precio_producto, cantidad_producto, descuento_producto,
        (tb_productos.precio_producto * cantidad_producto) Subtotal,
        ROUND((tb_productos.precio_producto * cantidad_producto) - (tb_productos.precio_producto * cantidad_producto * tb_productos.descuento_producto / 100), 2) AS SubtotalConDescuento
        FROM tb_detallesOrdenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_productos USING(id_producto) WHERE id_orden = ?';
        $params = array($this->idorden);
        return Database::getRows($sql, $params);
    }


    public function readFilename()
    {
        $sql = 'SELECT imagen_producto
                 FROM tb_detallesOrdenes
                INNER JOIN tb_productos USING(id_producto)
                WHERE id_detalle = ?';
        $params = array($this->iddetalle);
        return Database::getRow($sql, $params);
    }


    /** */
    public function getOrder()
    {
        $this->estadoorden = 'Pendiente';
        $sql = 'SELECT id_orden
                FROM tb_ordenes
                WHERE estado_orden = ? AND id_cliente = ?';
        $params = array($this->estadoorden, $_SESSION['idCliente']);
        if ($data = Database::getRow($sql, $params)) {
            $_SESSION['idOrden'] = $data['id_orden'];
            return true;
        } else {
            return false;
        }
    }

    // Método para iniciar un pedido en proceso.
    public function startOrder()
    {
        if ($this->getOrder()) {
            return true;
        } else {
            $sql = 'INSERT INTO tb_ordenes(direccion_orden, id_cliente, estado_orden)
                    VALUES((SELECT direccion_cliente FROM tb_clientes WHERE id_cliente = ?), ?, ?)'; //Se manda la direccion dependiendo el ID del cliente
            $params = array($_SESSION['idCliente'], $_SESSION['idCliente'], $this->estadoorden);
            // Se obtiene el ultimo valor insertado de la llave primaria en la tabla pedido.
            if ($_SESSION['idOrden'] = Database::getLastRow($sql, $params)) {
                return true;
            } else {
                return false;
            }
        }
    }

    // Método para agregar un producto al carrito de compras.
    public function createDetail()
    {
        // Se realiza una subconsulta para obtener el precio del producto.
        $sql = 'INSERT INTO tb_detallesOrdenes(id_producto, cantidad_producto, id_orden)
                VALUES(?, ?, ?)';
        $params = array($this->producto, $this->cantidad, $_SESSION['idOrden']);

        return Database::executeRow($sql, $params);
    }

    // Método para obtener los productos que se encuentran en el carrito de compras.
    public function readDetail()
    {
        $sql = 'SELECT 
        id_detalle, 
        nombre_producto, 
        tb_detallesOrdenes.precio_producto, 
        cantidad_producto, 
        (tb_productos.precio_producto * cantidad_producto) AS Subtotal,
        tb_productos.descuento_producto,
        ROUND((tb_productos.precio_producto * cantidad_producto) - (tb_productos.precio_producto * cantidad_producto * tb_productos.descuento_producto / 100), 2) AS subtotal_con_descuento
        
    FROM 
        tb_detallesOrdenes
    INNER JOIN 
        tb_ordenes USING(id_orden)
    INNER JOIN 
        tb_productos USING(id_producto)
                WHERE id_orden = ?';
        $params = array($_SESSION['idOrden']);
        return Database::getRows($sql, $params);
    }

    // Método para finalizar un pedido por parte del cliente.
    public function finishOrder()
    {
        $this->estadoorden = 'Finalizada';
        $sql = 'UPDATE tb_ordenes
                SET estado_orden = ?
                WHERE id_orden = ?';
        $params = array($this->estadoorden, $_SESSION['idOrden']);
        return Database::executeRow($sql, $params);
    }

    // Método para actualizar la cantidad de un producto agregado al carrito de compras..
    public function updateDetail()
    {
        $sql = 'UPDATE tb_detallesOrdenes
                SET cantidad_producto = ?
                WHERE id_detalle = ? AND id_orden = ?';
        $params = array($this->cantidad, $this->iddetalle, $_SESSION['idOrden']);
        return Database::executeRow($sql, $params);
    }

    // Método para eliminar un producto que se encuentra en el carrito de compras.
    public function deleteDetail()
    {
        $sql = 'DELETE FROM tb_detallesOrdenes
                WHERE id_detalle = ? AND id_orden = ?';
        $params = array($this->iddetalle, $_SESSION['idOrden']);
        return Database::executeRow($sql, $params);
    }


    public function searchOrders()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = ' SELECT id_detalle, 
         id_orden, 
         nombre_producto, 
         imagen_producto, 
         tb_productos.precio_producto, 
         cantidad_producto, 
         tb_productos.descuento_producto, 
         (tb_productos.precio_producto * cantidad_producto) AS Subtotal, 
         ROUND((tb_productos.precio_producto * cantidad_producto) - (tb_productos.precio_producto * cantidad_producto * tb_productos.descuento_producto / 100), 2) AS SubtotalConDescuento,
         tb_ordenes.fecha_registro, 
         estado_orden
     FROM 
         tb_detallesOrdenes
     INNER JOIN 
         tb_ordenes USING(id_orden)
     INNER JOIN 
         tb_productos USING(id_producto) 
                WHERE id_cliente = ? AND (nombre_producto LIKE ? OR tb_ordenes.fecha_registro LIKE ? OR id_orden LIKE ? or id_detalle LIKE ?)
                ORDER BY id_producto';
        $params = array($_SESSION['idCliente'], $value, $value, $value, $value);
        return Database::getRows($sql, $params);
    }

    //Funcion para el sitio publico: Leer los detalles de cada compra
    public function myOrders()
    {
        $sql = 'SELECT 
         id_detalle, 
         id_orden, 
         nombre_producto, 
         imagen_producto, 
         tb_productos.precio_producto, 
         cantidad_producto, 
         tb_productos.descuento_producto, 
         (tb_productos.precio_producto * cantidad_producto) AS Subtotal, 
         ROUND((tb_productos.precio_producto * cantidad_producto) - (tb_productos.precio_producto * cantidad_producto * tb_productos.descuento_producto / 100), 2) AS SubtotalConDescuento,
         tb_ordenes.fecha_registro, 
         estado_orden
     FROM 
         tb_detallesOrdenes
     INNER JOIN 
         tb_ordenes USING(id_orden)
     INNER JOIN 
         tb_productos USING(id_producto)  WHERE id_cliente = ?
         ORDER BY id_orden';
        $params = array($_SESSION['idCliente']);
        return Database::getRows($sql, $params);
    }

    //Funcion para el sitio publico: Generar un documento con los datos del cliente y la compra realizada
    public function myOrdersReport()
    {
        $sql = "SELECT 
    CONCAT(nombre_cliente, ' ', apellido_cliente) as Cliente,
    correo_cliente,
    telefono_cliente,
    id_detalle, 
    id_orden,
    tb_ordenes.fecha_registro, 
    nombre_producto, 
    tb_productos.precio_producto, 
    cantidad_producto, 
    tb_productos.descuento_producto, 
    (tb_productos.precio_producto * cantidad_producto) AS Subtotal, 
    ROUND((tb_productos.precio_producto * cantidad_producto) - (tb_productos.precio_producto * cantidad_producto * tb_productos.descuento_producto / 100), 2) AS SubtotalConDescuento,
    
    tb_ordenes.fecha_registro
    FROM 
    tb_detallesOrdenes
    INNER JOIN 
    tb_ordenes USING(id_orden)
    INNER JOIN 
    tb_clientes USING(id_cliente)
    INNER JOIN 
    tb_productos USING(id_producto)  WHERE id_cliente = ? AND id_orden = ?
    ORDER BY id_orden";
        $params = array($_SESSION['idCliente'], $this->idorden);
        return Database::getRows($sql, $params);
    }

    //Reporte de ordenes
    public function Ordenes($mes, $anio)
{
    $sql = "SELECT 
        tb_ordenes.id_orden,
        GROUP_CONCAT(CONCAT(nombre_producto, ' (', cantidad_producto, ')') ORDER BY nombre_producto SEPARATOR '\n') AS productos,
        tb_ordenes.fecha_registro, 
        estado_orden, 
        direccion_orden, 
        correo_cliente
    FROM 
        tb_detallesordenes
    INNER JOIN 
        tb_ordenes USING(id_orden)
    INNER JOIN 
        tb_productos USING(id_producto)
    INNER JOIN 
        tb_clientes USING(id_cliente)
    WHERE 
        MONTH(tb_ordenes.fecha_registro) = ? AND YEAR(tb_ordenes.fecha_registro) = ?
    GROUP BY 
        tb_ordenes.id_orden, tb_ordenes.fecha_registro, estado_orden, direccion_orden, correo_cliente
    ORDER BY 
        id_orden, correo_cliente, tb_ordenes.fecha_registro";
    $params = array($mes, $anio);
    return Database::getRows($sql, $params);
}


    //Gráfico de predicción

    public function predictGraph()
    {
        $sql = "SELECT 
    MONTH(o.fecha_registro) AS mes,
    SUM(d.cantidad_producto * d.precio_producto) AS ganancias_mensuales
    FROM 
    tb_detallesordenes d
    JOIN 
    tb_ordenes o ON d.id_orden = o.id_orden
    WHERE 
    YEAR(o.fecha_registro) = YEAR(CURDATE())
    GROUP BY 
    MONTH(o.fecha_registro)
    ORDER BY mes;";

        return Database::getRows($sql);
    }

    public function perdidasPredictGraph()
    {
        $sql = "SELECT 
        MONTH(o.fecha_registro) AS anio,
        SUM(d.cantidad_producto * d.precio_producto) AS perdidas_anuales
        FROM 
        tb_detallesordenes d
        JOIN 
        tb_ordenes o ON d.id_orden = o.id_orden
        WHERE 
        YEAR(o.fecha_registro) = YEAR(CURDATE()) 
        AND o.estado_orden = 'Anulada'
        GROUP BY 
        MONTH(o.fecha_registro);";

        return Database::getRows($sql);
    }
}
