
 // Obtener la fecha y hora actual
 function addZero(num) {
  return (num < 10 ? '0' : '') + num;
}

// Función para actualizar la fecha y la hora cada segundo
function updateDateTime() {
  var today = new Date();
  var formattedDateTime = addZero('Fecha actual: ' + today.getDate()) + '/' + addZero(today.getMonth() + 1) + '/' + today.getFullYear() +
      ', ' + addZero(today.getHours()) + ':' + addZero(today.getMinutes()) + ':' + addZero(today.getSeconds());
  document.getElementById("fechaLabel").innerText = formattedDateTime;
}

// Llamar a la función para la primera actualización
updateDateTime();

// Actualizar cada segundo
setInterval(updateDateTime, 1000);



 // Insertar la fecha y la hora en el label
 document.getElementById("fechaLabel").innerText = formattedDateTime;


//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);


document.getElementById("btnProductos").addEventListener("click", function () {
  location.href = "productos.html";
});
//método para que un botón abra una ventana
document.getElementById("btnProductos").addEventListener("click", function () {
    location.href = "productos.html";
  });
  //método para que un botón abra una ventana
document.getElementById("btnCatego").addEventListener("click", function () {
    location.href = "categoria.html";
  });
  //método para que un botón abra una ventana
document.getElementById("btnMarcas").addEventListener("click", function () {
    location.href = "marcas.html";
  });
  //método para que un botón abra una ventana
document.getElementById("btnClientes").addEventListener("click", function () {
    location.href = "clientes.html";
  });
  //método para que un botón abra una ventana
document.getElementById("btnAdmins").addEventListener("click", function () {
    location.href = "administradores.html";
  });
    //método para que un botón abra una ventana
document.getElementById("btnCerrarCe").addEventListener("click", function () {
  location.href = "index.html";
});
