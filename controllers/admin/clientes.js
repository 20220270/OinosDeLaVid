//Busqueda de datos dentro de la card

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("Search");
    const noResultsElement = document.getElementById("noResults"); // Referencia al elemento del mensaje

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        let found = false; // Indicador de si se encontró al menos una coincidencia

        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchText)) {
                card.style.display = "";
                found = true; // Marca como encontrada una coincidencia
            } else {
                card.style.display = "none";
            }
        });

        // Muestra u oculta el mensaje de 'no resultados' basado en si se encontraron coincidencias
        noResultsElement.style.display = found ? "none" : "block";
    });
});


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
    window.location.href = "../../views/admin/ordenes.html";
  });

  document.querySelector('.mostrarPedidosFiltados').addEventListener("click", function () {
    window.location.href = "../../views/admin/ordenes.html";
  });



