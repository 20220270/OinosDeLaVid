
        localStorage.setItem('paginaOrigen', window.location.href);

$(document).ready(function(){
    $("#btnModalAbrir").click(function(){
      $("#miModal").modal("show");
    });

  });

  $(document).ready(function(){
    $("#btnActualizar").click(function(){
      $("#miModal2").modal("show");
    });
  });

  //Ventana modal para mostrar la inserción de datos y ocultar la ventana anterior
$(document).ready(function () {
  $("#btnGuardar").click(function () {
    $("#miModalR").modal("show");
  });
  $("#btnGuardar").click(function () {
    $("#miModal").modal("hide");
  });
});

  //Ventana modal para mostrar la confirmación de un dato eliminado
$(document).ready(function () {
  $("#btnEliminar").click(function () {
    $("#miModalDe").modal("show");
  });
});


//Ventana modal para mostrar la eliminación de un datos

$(document).ready(function () {
  $("#btnElimin").click(function () {
    $("#miModalDe2").modal("show");
  });
  $("#btnElimin").click(function () {
    $("#miModalDe").modal("hide");
  });
});

//Ventana modal para mostrar la confirmación de un dato eliminado
$(document).ready(function () {
  $("#btnEliminar").click(function () {
    $("#miModalDe").modal("show");
  });
});

//Ventana modal para mostrar la eliminación de un datos

$(document).ready(function () {
  $("#btnElimin").click(function () {
    $("#miModalDe2").modal("show");
  });
  $("#btnElimin").click(function () {
    $("#miModalDe").modal("hide");
  });
});

//Ventana modal para mostrar la actualización de datos
$(document).ready(function () {
  $("#btnActtu").click(function () {
    $("#miModalAC").modal("show");
  });
  $("#btnActuA").click(function () {
    $("#miModal2").modal("hide");
  });
});

//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios
$(document).ready(function() {
  $("#nombreProducto").on("keypress", function(event) {
      var inputValue = event.which;
      // Permitir solo letras y algunos caracteres especiales como espacio, guión, etc.
      if (!(inputValue >= 65 && inputValue <= 90) && // letras mayúsculas
          !(inputValue >= 97 && inputValue <= 122) && // letras minúsculas
          !(inputValue == 32 || inputValue == 45 || inputValue == 46 || inputValue == 44)) { // espacio, guión, punto, coma
          event.preventDefault();
      }
  });
});


