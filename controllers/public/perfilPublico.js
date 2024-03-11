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
    });
  });