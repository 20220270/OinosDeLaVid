//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);

//Ventana modal para agregar marcas

$(document).ready(function () {
  $("#btnModalMarca").click(function () {
    $("#miModalM").modal("show");
  });
});

//Ventana modal para actualizar marcas
$(document).ready(function () {
  $("#botonActu").click(function () {
    $("#miModalM2").modal("show");
  });
});

//Ventana modal para mostrar la inserción de datos
$(document).ready(function () {
  $("#btnGuardar").click(function () {
    $("#miModalR").modal("show");
  });
});


//Ventana modal para mostrar la confirmación de un dato eliminado
$(document).ready(function () {
  $("#btnEliminar").click(function () {
    $("#miModalDe").modal("show");
  });
});


//Ventana modal para mostrar la eliminacipon de un datos

$(document).ready(function () {
  $("#btnElim").click(function () {
    $("#miModalDe2").modal("show");
  });
  $("#btnElim").click(function () {
    $("#miModalDe").modal("hide");
  });
});

//Ventana modal para mostrar la actualización de datos

$(document).ready(function () {
  $("#btnActualizarR").click(function () {
    $("#miModalAC").modal("show");
  });
});

//método para que un botón abra una ventana
document.getElementById("btnMostrar").addEventListener("click", function () {
  window.location.href = "../../views/admin/productos.html";
});