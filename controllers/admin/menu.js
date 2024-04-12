//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);

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