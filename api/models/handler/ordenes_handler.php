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
    protected $iddetalle = null;
    protected $ordenid = null;
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
        $sql = 'SELECT id_detalle, id_orden, nombre_cliente, estado_orden, direccion_orden, nombre_producto, cantidad_producto, total_a_pagar FROM tb_detallesordenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
                WHERE nombre_cliente LIKE ? OR estado_orden LIKE ?
                ORDER BY id_detalle';
        $params = array($value, $value);
        return Database::getRows($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_detalle, id_orden, nombre_cliente, estado_orden, direccion_orden, nombre_producto, cantidad_producto, total_a_pagar FROM tb_detallesordenes
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
                ORDER BY id_detalle';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_detalle, id_orden, nombre_cliente, estado_orden, direccion_orden, nombre_producto, cantidad_producto, total_a_pagar FROM tb_detallesordenes
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
}
