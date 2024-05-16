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
    protected $idpedido = null;
    protected $iddetalle = null;
    protected $nombrecliente = null;
    protected $estadoorden = null;
    protected $direccion = null;
    protected $producto = null;
    protected $cantidad = null;
    protected $total = null;



    /*
     *  Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
     */
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = 'SELECT id_detalle, nombre_cliente, estado_orden, direccion_orden, nombre_producto, cantidad_producto, total_a_pagar FROM tb_detallesordenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
                WHERE nombre_cliente LIKE ? OR estado_orden LIKE ? OR direccion_orden LIKE ? OR nombre_producto LIKE ?
                ORDER BY id_detalle';
        $params = array($value, $value, $value, $value);
        return Database::getRows($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_detalle, nombre_cliente, estado_orden, direccion_orden, nombre_producto, cantidad_producto, total_a_pagar FROM tb_detallesordenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
                ORDER BY id_detalle';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_detalle, nombre_cliente, estado_orden, direccion_orden, nombre_producto, cantidad_producto, total_a_pagar FROM tb_detallesordenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
                WHERE id_detalle = ?';
        $params = array($this->iddetalle);
        return Database::getRow($sql, $params);
    }

    public function updateRow()
    {
        $sql = 'UPDATE tb_detallesordenes
                SET estado_orden = ?
                WHERE id_detalle = ?';
        $params = array($this->estadoorden, $this->iddetalle);
        return Database::executeRow($sql, $params);
    }


    /** */
    public function getOrder()
    {
        $this->estadoorden = 'Pendiente';
        $sql = 'SELECT id_detalle, id_orden
                FROM tb_detallesOrdenes
                INNER JOIN tb_ordenes USING(id_orden)
                WHERE estado_pedido = ? AND id_cliente = ?';
        $params = array($this->estadoorden, $_SESSION['idCliente']);
        if ($data = Database::getRow($sql, $params)) {
            $_SESSION['idPedido'] = $data['id_orden'];
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
            $sql = 'INSERT INTO tb_ordenes(direccion_pedido, id_cliente)
                    VALUES((SELECT direccion_cliente FROM tb_clientes WHERE id_cliente = ?), ?)';
            $params = array($_SESSION['idCliente'], $_SESSION['idCliente']);
            // Se obtiene el ultimo valor insertado de la llave primaria en la tabla pedido.
            if ($_SESSION['idPedido'] = Database::getLastRow($sql, $params)) {
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
        $sql = 'INSERT INTO tb_detallesOrdenes(id_producto, precio_producto, cantidad_producto, id_orden)
                VALUES(?, (SELECT precio_producto FROM tb_productos WHERE id_producto = ?), ?, ?)';
        $params = array($this->producto, $this->producto, $this->cantidad, $_SESSION['idPedido']);
        return Database::executeRow($sql, $params);
    }

    // Método para obtener los productos que se encuentran en el carrito de compras.
    public function readDetail()
    {
        $sql = 'SELECT id_detalle, nombre_producto,precio_producto, cantidad_producto
        FROM tb_detallesOrdenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_productos USING(id_producto)
                WHERE id_orden = ?';
        $params = array($_SESSION['idPedido']);
        return Database::getRows($sql, $params);
    }

    // Método para finalizar un pedido por parte del cliente.
    public function finishOrder()
    {
        $this->estadoorden = 'Finalizado';
        $sql = 'UPDATE tb_detallesOrdenes
                SET estado_pedido = ?
                WHERE id_orden = ?';
        $params = array($this->estadoorden, $_SESSION['idPedido']);
        return Database::executeRow($sql, $params);
    }

    // Método para actualizar la cantidad de un producto agregado al carrito de compras.
    public function updateDetail()
    {
        $sql = 'UPDATE tb_detallesOrdenes
                SET cantidad_producto = ?
                WHERE id_detalle = ? AND id_orden = ?';
        $params = array($this->cantidad, $this->iddetalle, $_SESSION['idPedido']);
        return Database::executeRow($sql, $params);
    }

    // Método para eliminar un producto que se encuentra en el carrito de compras.
    public function deleteDetail()
    {
        $sql = 'DELETE FROM tb_detallesOrdenes
                WHERE id_detalle = ? AND id_orden = ?';
        $params = array($this->iddetalle, $_SESSION['idPedido']);
        return Database::executeRow($sql, $params);
    }
}
