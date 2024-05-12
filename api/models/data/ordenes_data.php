<?php
// Se incluye la clase para validar los datos de entrada.
require_once('../../helpers/validator.php');
// Se incluye la clase padre.
require_once('../../models/handler/ordenes_handler.php');
/*
*	Clase para manejar el encapsulamiento de los datos de la tabla CLIENTE.
*/
class OrdenesData extends OrdenesHandler
{
    // Atributo genérico para manejo de errores.
    private $data_error = null;

    /*
    *   Métodos para validar y establecer los datos.
    */
    public function setId($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->iddetalle = $value;
            return true;
        } else {
            $this->data_error = 'El identificador de la orden es incorrecto';
            return false;
        }
    }

    public function setNombreCliente($value, $min = 2, $max = 50)
    {
        if (!Validator::validateAlphabetic($value)) {
            $this->data_error = 'El nombre debe ser un valor alfabético';
            return false;
        } elseif (Validator::validateLength($value, $min, $max)) {
            $this->nombrecliente = $value;
            return true;
        } else {
            $this->data_error = 'El nombre debe tener una longitud entre ' . $min . ' y ' . $max;
            return false;
        }
    }

    public function setEstado($value, $min = 2, $max = 50)
    {
        if (!Validator::validateAlphabetic($value)) {
            $this->data_error = 'El estado debe ser un valor alfabético';
            return false;
        } elseif (Validator::validateLength($value, $min, $max)) {
            $this->estadoorden = $value;
            return true;
        } else {
            $this->data_error = 'El estado debe tener una longitud entre ' . $min . ' y ' . $max;
            return false;
        }
    }

    public function setDireccion($value)
    {
        if (Validator::validateString($value)) {
            $this->direccion = $value;
            return true;
        } else {
            $this->data_error = 'La dirección está incorrecta';
            return false;
        }
    }

    public function setProducto($value)
    {
        if (!Validator::validateString($value)) {
            $this->data_error = 'El producto está incorrecto';
            return false;
        
        } else {
            $this->producto = $value;
            return true;
        }
    }

    public function setCantidad($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->iddetalle = $value;
            return true;
        } else {
            $this->data_error = 'La cantidad de la orden es incorrecto';
            return false;
        }
    }

    public function setTotal($value)
    {
        if (Validator::validateMoney($value)) {
            $this->iddetalle = $value;
            return true;
        } else {
            $this->data_error = 'La total de la orden es incorrecto';
            return false;
        }
    }

    // Método para obtener el error de los datos.
    public function getDataError()
    {
        return $this->data_error;
    }
}
