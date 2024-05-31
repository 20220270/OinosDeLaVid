<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php');
/*
 *  Clase para manejar el comportamiento de los datos de la tabla CATEGORIA.
 */
class ValoracionHandler
{
    /*
     *  Declaración de atributos para el manejo de datos.
     */
    protected $idvaloracion = null;
    protected $iddetalle = null;
    protected $nombreproducto = null;
    protected $calificacion = null;
    protected $comentario = null;
    protected $fecha = null;
    protected $estado = null;


    /*
     *  Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
     */
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = 'SELECT id_valoracion, id_detalle, nombre_producto, calificacion_producto, comentario_producto, estado_comentario, p.fecha_valoracion FROM tb_valoraciones p
        INNER JOIN tb_detallesordenes USING(id_detalle)
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
        WHERE nombre_producto LIKE ? OR estado_comentario LIKE ?
        GROUP BY id_valoracion
		ORDER BY calificacion_producto DESC;';
        $params = array($value, $value);
        return Database::getRows($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_valoracion, id_detalle, nombre_producto, calificacion_producto, comentario_producto, estado_comentario, p.fecha_valoracion
        FROM tb_valoraciones p
        INNER JOIN tb_detallesordenes USING(id_detalle)
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
        ORDER BY id_valoracion, calificacion_producto DESC;
        ';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_valoracion, id_detalle, nombre_producto, calificacion_producto, comentario_producto, estado_comentario, p.fecha_valoracion FROM tb_valoraciones p
        INNER JOIN tb_detallesordenes USING(id_detalle)
        INNER JOIN tb_ordenes USING(id_orden)
        INNER JOIN tb_clientes USING(id_cliente)
        INNER JOIN tb_productos USING(id_producto)
        WHERE id_valoracion = ?
        GROUP BY id_valoracion
		ORDER BY calificacion_producto DESC;'
                ;
        $params = array($this->idvaloracion);
        return Database::getRow($sql, $params);
    }

    public function updateRow()
    {
        $sql = 'UPDATE tb_valoraciones
                SET estado_comentario = ?
                WHERE id_valoracion = ?';
        $params = array($this->estado, $this->idvaloracion);
        return Database::executeRow($sql, $params);
    }

    public function createRating()
    {
        // Se realiza una subconsulta para obtener el precio del producto.
        $sql = 'INSERT INTO tb_valoraciones(valoracion_producto, comentario_producto, id_detalle)
                VALUES(?, ?, ?)';
        $params = array($this->calificacion, $this->comentario, $this->iddetalle);
        return Database::executeRow($sql, $params);
    }
}
