document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById('ModalActualizarDatosPublico');
    modal.addEventListener('show.bs.modal', function (event) {
        // Obtiene el texto del campo correo y lo establece en el input correoAdminA de la modal
        var correoTexto = document.getElementById('textoDUI').textContent.trim();
        document.getElementById('DUIClienteA').value = correoTexto;

        var aliasAdmin = document.getElementById('textoTelefono').textContent.trim();
        document.getElementById('telefonoClienteA').value = aliasAdmin;

        // Obtiene el texto del campo telefono y lo establece en el input telefonoAdminA de la modal
        var telefonoTexto = document.getElementById('textoUsuario').textContent.trim();
        document.getElementById('CorreoClienteA').value = telefonoTexto;

        var aliasAdmin = document.getElementById('textoDireccion').textContent.trim();
        document.getElementById('direccionClienteA').value = aliasAdmin;

        var nombreCompleto = document.getElementById('textoNombre').textContent.trim().split(' ');
        var nombre = nombreCompleto[0]; // Primer elemento es el nombre
        var apellido = nombreCompleto.slice(1).join(' '); // El resto son apellidos

        // Establece el nombre en el input nombreAdminA de la modal
        document.getElementById('NombreClienteA').value = nombre;

        // Establece el apellido en el input apellidoAdminA de la modal
        document.getElementById('ApellidoClienteA').value = apellido;

        // Agrega event listeners para validar los campos de nombre y apellido
        var inputNombre = document.getElementById('NombreClienteA');
        var inputApellido = document.getElementById('ApellidoClienteA');

        inputNombre.addEventListener('input', function (event) {
            validarCampo(inputNombre);
        });

        inputApellido.addEventListener('input', function (event) {
            validarCampo(inputApellido);
        });

        // Agrega event listeners para prevenir la entrada de números en los campos de nombre y apellido
        inputNombre.addEventListener('keydown', function (event) {
            prevenirNumeros(event);
        });

        inputApellido.addEventListener('keydown', function (event) {
            prevenirNumeros(event);
        });
    });

    // Función para validar el contenido de un campo
    function validarCampo(input) {
        var valor = input.value;
        // Expresión regular que permite solo letras y un guion opcional al principio o al final del texto
        var regex = /^[a-zA-Z]+-?[a-zA-Z]+$/;

        // Verifica si el valor cumple con la expresión regular
        if (!regex.test(valor)) {
            // Si el valor no cumple, muestra un mensaje de error o realiza alguna acción deseada
            // Por ejemplo, puedes desactivar el botón de guardar
            document.getElementById('btnGuardarAc').disabled = true;
            // Puedes mostrar un mensaje de error
            input.setCustomValidity('El campo debe contener solo letras y un guion opcional al principio o al final.');
        } else {
            // Si el valor cumple con la expresión regular, activa el botón de guardar (si estaba desactivado)
            document.getElementById('btnGuardarAc').disabled = false;
            // Elimina el mensaje de error si lo había
            input.setCustomValidity('');
        }
    }

    // Función para prevenir la entrada de números
    function prevenirNumeros(event) {
        // Obtiene el código de la tecla presionada
        var codigoTecla = event.keyCode || event.which;
        // Permite las teclas de control como Enter, Tab, etc.
        if (codigoTecla == 8 || codigoTecla == 9 || codigoTecla == 13 || codigoTecla == 16 || codigoTecla == 17 || codigoTecla == 20 || codigoTecla == 27 || codigoTecla == 46) {
            return;
        }
        // Verifica si el código de la tecla no corresponde a una letra
        if ((codigoTecla < 65 || codigoTecla > 90) && (codigoTecla < 97 || codigoTecla > 122)) {
            // Cancela el evento de entrada (no se permite la tecla)
            event.preventDefault();
        }
    }

    //Validación para el DUI
    vanillaTextMask.maskInput({
        inputElement: document.getElementById('DUIClienteA'),
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    });

    //Validación para el teléfono
    vanillaTextMask.maskInput({
        inputElement: document.getElementById('telefonoClienteA'),
        mask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    });

});


