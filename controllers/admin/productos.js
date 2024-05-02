//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);



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


//Ventana modal para mostrar la eliminación de un datos

$(document).ready(function () {
  $("#btnElimin").click(function () {
    $("#miModalDe2").modal("show");
  });
  $("#btnElimin").click(function () {
    $("#miModalDe").modal("hide");
  });
});

//Validaciones

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

//Barra de busqueda para las cards
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

//Cambiar el estado
document.addEventListener("DOMContentLoaded", function() {
  const mostrarButtons = document.querySelectorAll(".btnMostrar");

  mostrarButtons.forEach(button => {
      button.addEventListener("click", function() {
          // Asignar el contexto de cada botón a su card específica
          const card = button.closest('.card');

          // Buscar el label de 'Estado:' dentro de esta card
          const estadoLabel = Array.from(card.querySelectorAll("label")).find(label => label.textContent.includes("Estado:"));
          if (estadoLabel) {
              const valueLabel = estadoLabel.nextElementSibling;

              // Cambiar el texto dependiendo del estado actual
              if (valueLabel.textContent.trim() === "En venta") {
                  valueLabel.textContent = "No disponible";
              } else {
                  valueLabel.textContent = "En venta";
              }
          }
      });
  });
});





