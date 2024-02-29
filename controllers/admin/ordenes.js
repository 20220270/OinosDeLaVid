$(document).ready(function(){
    $("#btnEliminar").click(function(){
        $("#miModalDe").modal("show");
    });
});
$(document).ready(function(){
    $("#btnElimin").click(function(){
        $("#miModalDe2").modal("show");
    });
    $("#btnElimin").click(function(){
        $("#miModalDe").modal("hide");
    });
});
$(document).ready(function(){
    $("#btnActualizar").click(function(){
        $("#modalActualizarEstado").modal("show");
    });
});
$(document).ready(function(){
    $("#btnActualizarR").click(function(){
        $("#miModalACEs").modal("show");
    });
    $("#btnActualizarR").click(function(){
        $("#modalActualizarEstado").modal("hide");
    });
});

//método para que un botón abra una ventana
document.getElementById("mostrarValoracion").addEventListener("click", function () {
    window.location.href = "../../views/admin/Valoraciones.html";
  });
  