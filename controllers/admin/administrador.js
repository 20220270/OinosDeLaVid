//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);


//Busqueda de datos dentro de la card.

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


/* aqui se muestra el formulario para registrar */
$(document).ready(function () {
  $("#btnAbrirModal").click(function () {
    $("#miModal").modal("show");
  });
});

//Ventana modal para mostrar el formulario de actualizar datos

$(document).ready(function () {
  $("#btnActualizar").click(function () {
    $("#miModal2").modal("show");
  });
});

//Ventana modal para mostrar el formulario de cambiar la contraseña

$(document).ready(function () {
  $("#btnContra").click(function () {
    $("#miModal3").modal("show");
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
  $("#btnActuA").click(function () {
    $("#miModalAC").modal("show");
  });
  $("#btnActuA").click(function () {
    $("#miModal2").modal("hide");
  });
});

//Ventana modal para mostrar la actualización de contraseña
$(document).ready(function () {
  $("#btnGuardarContraseña").click(function () {
    $("#miModalACCon").modal("show");
  });
  $("#btnGuardarContraseña").click(function () {
    $("#miModal3").modal("hide");
  });
});

//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios en el nombre
$(document).ready(function () {
  $("#nombreAdmin").on("keypress", function (event) {
    var inputValue = event.which;
    // Permitir solo letras y guiones
    if (!((inputValue >= 65 && inputValue <= 90) || // letras mayúsculas
      (inputValue >= 97 && inputValue <= 122) || // letras minúsculas
      inputValue == 45)) { // guión
      event.preventDefault();
    }
  });
});

//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios en el apellido
$(document).ready(function () {
  $("#apellidoAdmin").on("keypress", function (event) {
    var inputValue = event.which;
    // Permitir solo letras y guiones
    if (!((inputValue >= 65 && inputValue <= 90) || // letras mayúsculas
      (inputValue >= 97 && inputValue <= 122) || // letras minúsculas
      inputValue == 45)) { // guión
      event.preventDefault();
    }
  });
});

//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios en el nombre
$(document).ready(function () {
  $("#nombreAdminA").on("keypress", function (event) {
    var inputValue = event.which;
    // Permitir solo letras y guiones
    if (!((inputValue >= 65 && inputValue <= 90) || // letras mayúsculas
      (inputValue >= 97 && inputValue <= 122) || // letras minúsculas
      inputValue == 45)) { // guión
      event.preventDefault();
    }
  });
});

//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios en el apellido
$(document).ready(function () {
  $("#apellidoAdminA").on("keypress", function (event) {
    var inputValue = event.which;
    // Permitir solo letras y guiones
    if (!((inputValue >= 65 && inputValue <= 90) || // letras mayúsculas
      (inputValue >= 97 && inputValue <= 122) || // letras minúsculas
      inputValue == 45)) { // guión
      event.preventDefault();
    }
  });
});






