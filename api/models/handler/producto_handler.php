<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php');
/*
*	Clase para manejar el comportamiento de los datos de la tabla PRODUCTO.
*/
class ProductoHandler
{
    /*
    *   Declaración de atributos para el manejo de datos.
    */
    protected $id = null;
    protected $categoria = null;
    protected $marca = null;
    protected $nombre = null;
    protected $descripcion = null;
    protected $precio = null;
    protected $existencias = null;
    protected $imagen = null;
    protected $estado = null;
    protected $descuento = null;
    protected $idadmin = null;

    // Constante para establecer la ruta de las imágenes.
    const RUTA_IMAGEN = '../../images/productos/';

    /*
    *   Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
    */
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = 'SELECT id_producto, nombre_categoria, nombre_marca, nombre_producto, descripcion_producto, precio_producto, imagen_producto, estado_producto,
                existencias_producto, descuento_producto, fecha_registro FROM tb_productos
                INNER JOIN tb_categorias USING(id_categoria)
                INNER JOIN tb_marcas USING(id_marca)
                WHERE nombre_producto LIKE ? OR descripcion_producto LIKE ? OR precio_producto LIKE ? or estado_producto LIKE ?
                ORDER BY id_producto';
        $params = array($value, $value, $value, $value);
        return Database::getRows($sql, $params);
    }

    public function createRow()
    {
        $sql = 'INSERT INTO tb_productos(id_categoria, id_marca, nombre_producto, descripcion_producto, precio_producto, existencias_producto, imagen_producto, estado_producto, descuento_producto, id_administrador)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        $params = array($this->categoria, $this -> marca , $this->nombre, $this->descripcion, $this->precio, $this->existencias, $this->imagen, $this->estado, $this->descuento, $_SESSION['idAdministrador']);
        return Database::executeRow($sql, $params);
    }

    public function readAll()
    {
        $sql = "SELECT id_producto, nombre_categoria, nombre_marca, nombre_producto, descripcion_producto, precio_producto, imagen_producto, estado_producto,
        existencias_producto, descuento_producto, tb_productos.fecha_registro, CONCAT(nombre_admistrador, ' ', apellido_administrador) as Nombre FROM tb_productos
        INNER JOIN tb_categorias USING(id_categoria)
        INNER JOIN tb_marcas USING(id_marca)
        INNER JOIN tb_administradores USING(id_administrador)
                ORDER BY id_producto";
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_producto, id_categoria, id_marca, nombre_producto, descripcion_producto, precio_producto, imagen_producto, estado_producto,
        existencias_producto, descuento_producto, fecha_registro FROM tb_productos
        INNER JOIN tb_categorias USING(id_categoria)
        INNER JOIN tb_marcas USING(id_marca)
                WHERE id_producto = ?';
        $params = array($this->id);
        return Database::getRow($sql, $params);
    }

    public function readFilename()
    {
        $sql = 'SELECT imagen_producto
                FROM tb_productos
                WHERE id_producto = ?';
        $params = array($this->id);
        return Database::getRow($sql, $params);
    }

    public function updateRow()
    {
        $sql = 'UPDATE tb_productos
                SET imagen_producto = ?, nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, existencias_producto = ?, estado_producto = ?, descuento_producto = ? , id_categoria = ?, id_marca = ?
                WHERE id_producto = ?';
        $params = array($this->imagen, $this->nombre, $this->descripcion, $this->precio, $this->existencias, $this -> estado, $this->descuento, $this->categoria, $this -> marca,  $this->id);
        return Database::executeRow($sql, $params);
    }

    public function deleteRow()
    {
        $sql = 'DELETE FROM tb_productos
                WHERE id_producto = ?';
        $params = array($this->id);
        return Database::executeRow($sql, $params);
    }

    public function readProductosCategoria()
    {
        $sql = 'SELECT id_producto, id_categoria, nombre_producto, descripcion_producto, precio_producto, imagen_producto, estado_producto,
        existencias_producto, descuento_producto FROM tb_productos
        INNER JOIN tb_categorias USING(id_categoria)
                WHERE id_categoria = ? AND estado_producto = "En venta" AND existencias_producto > 0
                ORDER BY nombre_producto';
        $params = array($this->categoria);
        return Database::getRows($sql, $params);
    }

    public function readProductosMarcas()
    {
        $sql = 'SELECT id_producto, id_marca, nombre_producto, descripcion_producto, precio_producto, imagen_producto, estado_producto,
        existencias_producto, descuento_producto FROM tb_productos
        INNER JOIN tb_marcas USING(id_marca)
                WHERE id_marca = ? AND estado_producto = "En venta"
                ORDER BY nombre_producto';
        $params = array($this->categoria);
        return Database::getRows($sql, $params);
    }

       /*
    *   Métodos para generar gráficos.
    */

    //Categorías con más productos
    public function cantidadProductosCategoria()
    {
        $sql = 'SELECT nombre_categoria, COUNT(id_producto) cantidad_producto
                FROM tb_productos
                INNER JOIN tb_categorias USING(id_categoria)
                GROUP BY nombre_categoria ORDER BY cantidad_producto DESC LIMIT 5';
        return Database::getRows($sql);
    }

    //Productos con mejor calificación
    public function productosConMejorRating()
    {
        $sql = "SELECT id_producto, nombre_producto, AVG(calificacion_producto) AS promedio_calificacion
        FROM tb_valoraciones
        INNER JOIN tb_detallesordenes USING (id_detalle)
        INNER JOIN tb_productos USING (id_producto)
        GROUP BY id_producto, nombre_producto ORDER BY promedio_calificacion DESC LIMIT 5";
        return Database::getRows($sql);
    }

    //Productos más vendidos

    public function productosMasVendids()
    {
        $sql = "SELECT nombre_producto, SUM(cantidad_producto) AS total_vendido
                FROM tb_detallesordenes
                INNER JOIN tb_productos USING(id_producto)
                GROUP BY id_producto
                ORDER BY total_vendido DESC
                LIMIT 5";
        return Database::getRows($sql);
    }

    //Clientes con más compras

    public function clientesConMasCompras()
    {
        $sql = "SELECT CONCAT(nombre_cliente, ' ', apellido_cliente) as Cliente, COUNT(id_orden) as total_ordenes FROM tb_detallesordenes
                INNER JOIN tb_ordenes using (id_orden)
                INNER JOIN tb_clientes USING(id_cliente)
                GROUP BY id_cliente, nombre_cliente, apellido_cliente
                ORDER BY total_ordenes DESC LIMIT 5";
        return Database::getRows($sql);
    }


    //Productos con más existencias

    public function productosConMasExistencias()
    {
        $sql = "SELECT id_producto, nombre_producto, existencias_producto 
                FROM tb_productos 
                ORDER BY existencias_producto DESC LIMIT 5;";
                return Database::getRows($sql);
    }



    public function porcentajeProductosCategoria()
    {
        $sql = 'SELECT nombre_categoria, ROUND((COUNT(id_producto) * 100.0 / (SELECT COUNT(id_producto) FROM tb_productos)), 2) porcentaje
        FROM tb_productos
        INNER JOIN tb_categorias USING(id_categoria)
        GROUP BY nombre_categoria ORDER BY porcentaje DESC';
        return Database::getRows($sql);
    }

    //Comentarios de los productos
    public function commentsProduct()
    {
        $sql = "SELECT id_valoracion, nombre_producto, comentario_producto, calificacion_producto,CONCAT(nombre_cliente, ' ', apellido_cliente) as Nombre, fecha_valoracion from tb_valoraciones
        INNER JOIN tb_detallesordenes USING(id_detalle)
        INNER JOIN tb_ordenes USING(id_orden)
       INNER JOIN tb_productos USING(id_producto) 
       INNER JOIN tb_clientes USING(id_cliente)
        where id_producto = ? AND estado_comentario = 'Habilitado'";
        $params = array($this->id);
        //return Database::getRows($sql);
        return Database::getRows($sql, $params);
    }

    //Categorías con más productos
    public function MarcasMasVendidas()
    {
        $sql = 'SELECT nombre_marca, SUM(cantidad_producto) AS total_vendido
                FROM tb_detallesordenes
                INNER JOIN tb_productos USING(id_producto)
                 INNER JOIN tb_marcas USING(id_marca)
                GROUP BY id_marca
                ORDER BY total_vendido DESC
                LIMIT 5';
        return Database::getRows($sql);
    }

    /*
    *   Métodos para generar reportes.
    */
    public function productosCategoria()
    {
        $sql = 'SELECT nombre_producto, precio_producto, estado_producto, existencias_producto
                FROM tb_productos
                INNER JOIN tb_categorias USING(id_categoria)
                WHERE id_categoria = ?
                ORDER BY nombre_producto';
        $params = array($this->categoria);
        return Database::getRows($sql, $params);
    }

    public function productosMarcas()
    {
        $sql = 'SELECT nombre_producto, precio_producto, estado_producto, existencias_producto
                FROM tb_productos
                INNER JOIN tb_marcas USING(id_marca)
                WHERE id_marca = ?
                ORDER BY nombre_producto';
        $params = array($this->marca);
        return Database::getRows($sql, $params);
    }

    public function productosAdministradores()
    {
        $sql = 'SELECT nombre_producto, precio_producto, estado_producto, existencias_producto
                FROM tb_productos
                INNER JOIN tb_administradores USING(id_administrador)
                WHERE id_administrador = ?
                ORDER BY nombre_producto';
        $params = array($this->idadmin);
        return Database::getRows($sql, $params);
    }
}
