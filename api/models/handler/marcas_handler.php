<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php');
/*
 *  Clase para manejar el comportamiento de los datos de la tabla CATEGORIA.
 */
class MarcaHandler
{
    /*
     *  Declaración de atributos para el manejo de datos.
     */
    protected $id = null;
    protected $nombre = null;
    protected $logo = null;

    // Constante para establecer la ruta de las imágenes.
    const RUTA_IMAGEN = '../../images/marcas/';

    /*
     *  Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
     */
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = 'SELECT id_marca, nombre_marca, logo_marca
                FROM tb_marcas
                WHERE nombre_marca LIKE ?
                ORDER BY id_marca';
        $params = array($value);
        return Database::getRows($sql, $params);
    }

    public function createRow()
    {
        $sql = 'INSERT INTO tb_marcas(nombre_marca, logo_marca)
                VALUES(?, ?)';
        $params = array($this->nombre, $this->logo);
        return Database::executeRow($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_marca, nombre_marca, logo_marca
                FROM tb_marcas
                ORDER BY id_marca';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_marca, nombre_marca, logo_marca
                FROM tb_marcas
                WHERE id_marca = ?';
        $params = array($this->id);
        return Database::getRow($sql, $params);
    }

    public function readFilename()
    {
        $sql = 'SELECT logo_marca
                FROM tb_marcas
                WHERE id_marca = ?';
        $params = array($this->id);
        return Database::getRow($sql, $params);
    }

    public function updateRow()
    {
        $sql = 'UPDATE tb_marcas
                SET logo_marca = ?, nombre_marca = ?
                WHERE id_marca = ?';
        $params = array($this->logo, $this->nombre, $this->id);
        return Database::executeRow($sql, $params);
    }

    public function deleteRow()
    {
        $sql = 'DELETE FROM tb_marcas
                WHERE id_marca = ?';
        $params = array($this->id);
        return Database::executeRow($sql, $params);
    }
}
