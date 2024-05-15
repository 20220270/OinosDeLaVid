

//función para cerrar una modal a la vez que se abre otra modal. El mtodo de abrir está en el codigo html

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

