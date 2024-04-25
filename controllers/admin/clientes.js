
document.addEventListener("DOMContentLoaded", function() {
    var estadoCliente = document.getElementById("estadoCliente");

    estadoCliente.addEventListener("click", function() {
        var textoActual = estadoCliente.innerText.trim();

        // Cambiamos el texto y los estilos
        if (textoActual === "Activo") {
            estadoCliente.innerText = "Inactivo";
            estadoCliente.style.backgroundColor = "black";
            estadoCliente.style.color = "white";
        } else if (textoActual === "Inactivo") {
            estadoCliente.innerText = "Activo";
            estadoCliente.style.backgroundColor = "red";
            estadoCliente.style.color = "white";
        }
    });
});

//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);

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
document.querySelector('.mostrarPedidos').addEventListener("click", function () {
    window.location.href = "../../views/admin/verOrdenes.html";
  });

  document.querySelector('.mostrarPedidosFiltados').addEventListener("click", function () {
    window.location.href = "../../views/admin/verOrdenes.html";
  });



