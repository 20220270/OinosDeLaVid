$(document).ready(function(){
    $("#btnModalMarca").click(function(){
      $("#miModalM").modal("show");
    });
  });

  $(document).ready(function(){
    $("#botonActu").click(function(){
      $("#miModalM2").modal("show");
    });
  });

  $(document).ready(function(){
    $("#btnGuardar").click(function(){
      $("#miModalR").modal("show");
    });
  });

  $(document).ready(function(){
    $("#btnEliminar").click(function(){
      $("#miModalDe").modal("show");
    });
  });

  $(document).ready(function(){
    $("#btnElim").click(function(){
      $("#miModalDe2").modal("show");
    });
    $("#btnElim").click(function(){
        $("#miModalDe").modal("hide");
    });
  });

  $(document).ready(function(){
    $("#btnActualizarR").click(function(){
      $("#miModalAC").modal("show");
    });
  });

  document.getElementById("btnMostrar").addEventListener("click", function() {
    window.location.href = "../../views/admin/productos.html";
});