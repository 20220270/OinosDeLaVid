

document.addEventListener('DOMContentLoaded', function () {

  var modal = document.getElementById('ModalActualizarDatosAdmin');
  modal.addEventListener('show.bs.modal', function (event) {
    // Obtiene el texto del campo correo y lo establece en el input correoAdminA de la modal
    var correoTexto = document.getElementById('textoCorreo').textContent.trim();
    document.getElementById('CorreoAdminA').value = correoTexto;

    // Obtiene el texto del campo telefono y lo establece en el input telefonoAdminA de la modal
    var telefonoTexto = document.getElementById('textoTelefono').textContent.trim();
    document.getElementById('telefonoAdminA').value = telefonoTexto;

    var aliasAdmin = document.getElementById('textoUsuario').textContent.trim();
    document.getElementById('aliasAdminA').value = aliasAdmin;

    var nombreCompleto = document.getElementById('textoNombre').textContent.trim().split(' ');
      var nombre = nombreCompleto[0]; // Primer elemento es el nombre
      var apellido = nombreCompleto.slice(1).join(' '); // El resto son apellidos

    // Establece el nombre en el input nombreAdminA de la modal
    document.getElementById('NombreAdminA').value = nombre;

    // Establece el apellido en el input apellidoAdminA de la modal
    document.getElementById('ApellidoAdminA').value = apellido;
  });
});

//función para cerrar una modal a la vez que se abre otra modal

document.addEventListener('DOMContentLoaded', function () {
  var btnContraseniaNueva = document.getElementById('btnContraseniaNueva');
  var modalActualizarDatosAdmin = new bootstrap.Modal(document.getElementById('ModalActualizarDatosAdmin'));

  btnContraseniaNueva.addEventListener('click', function () {
    modalActualizarDatosAdmin.hide(); 
  });
});

//función para cerrar una ventana y abrir el login

document.addEventListener('DOMContentLoaded', function () {
  var cerrarSesionButton = document.getElementById('cerrarS');
  cerrarSesionButton.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
});

//función para cerrar una ventana y abrir el login

document.addEventListener('DOMContentLoaded', function () {
  var VolverButton = document.getElementById('VP');
  VolverButton.addEventListener('click', function () {
    window.location.href = 'Menu.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var botonVolver = document.getElementById('VP');
  botonVolver.addEventListener('click', function () {
    var paginaOrigen = localStorage.getItem('paginaOrigen');
    if (paginaOrigen) {
      window.location.href = paginaOrigen;
    } else {
      // Si no se encuentra la URL de la página de origen en localStorage, redirige a una página predeterminada
      window.location.href = 'index.html';
    }
  });
});

