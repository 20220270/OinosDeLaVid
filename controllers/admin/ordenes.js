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

//método para que un botón abra una ventana
document.getElementById("mostrarValoracion").addEventListener("click", function () {
    window.location.href = "../../views/admin/Valoraciones.html";
  });