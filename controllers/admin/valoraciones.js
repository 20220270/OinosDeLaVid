
  //Ventana modal para mostrar la confirmación de un dato eliminado
  $(document).ready(function () {
    $("#btnEliminar").click(function () {
      $("#miModalDe").modal("show");
    });
  });
  
  
  //Ventana modal para mostrar la eliminacipon de un datos
  
  $(document).ready(function () {
    $("#btnElimin").click(function () {
      $("#miModalDe2").modal("show");
    });
    $("#btnElimin").click(function () {
      $("#miModalDe").modal("hide");
    });
  });
  
  //Ventana modal para mostrar la actualización del estado de un comentario
  
  $(document).ready(function () {
    $("#btnActualizarR").click(function () {
      $("#miModalAC").modal("show");
    });
  });
  