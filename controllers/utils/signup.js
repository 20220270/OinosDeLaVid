//Modals
//Modal para registro exitoso
$(document).ready(function () {
    $("#btnRegistrarCliente").click(function () {
      $("#ModalExito").modal("show");
    });
  });

  //método para que un botón abra una ventana
document.getElementById("imagenCerrarSesion").addEventListener("click", function () {
  window.location.href = "../../views/public/login.html";
});