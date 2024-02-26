$(document).ready(function(){
    $("#btnModalAbrir").click(function(){
      $("#miModalP").modal("show");
    });
  });

  $(document).ready(function(){
    $("#btnActualizar").click(function(){
      $("#miModalP2").modal("show");
    });
  });

  //Ventana modal para mostrar la inserción de datos y ocultar la ventana anterior
$(document).ready(function () {
  $("#btnGuardarD").click(function () {
    $("#miModalR").modal("show");
  });
  $("#btnGuardarD").click(function () {
    $("#miModalP").modal("hide");
  });
});

  //Ventana modal para mostrar la actualización de datos
$(document).ready(function () {
  $("#btnAAActualiz").click(function () {
    $("#miModalAC").modal("show");
  });
  $("#btnAAActualiz").click(function () {
    $("#miModalP2").modal("hide");
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

