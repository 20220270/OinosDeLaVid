
  //Ventana modal para mostrar la eliminación de un datos
  
  $(document).ready(function () {
    $("#btnElimin").click(function () {
      $("#miModalDe2").modal("show");
    });
    $("#btnElimin").click(function () {
      $("#miModalDe").modal("hide");
    });
  });


  //Barra de busqueda para encontrar coincidencias dentro de la card
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


  

  