//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);

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

//Validación para que solamente se escriban números, un punto y dos números luego del punto en el precio
$(document).ready(function() {
  $("#PrecioProducto").on("keypress", function(event) {
      var inputValue = event.key;
      var currentValue = $(this).val();

      // Permitir solo números y un único punto decimal
      if (isNaN(inputValue) && inputValue !== '.') {
          event.preventDefault();
      }

      // Permitir solo un punto decimal
      if (inputValue === '.' && currentValue.indexOf('.') !== -1) {
          event.preventDefault();
      }

      // Limitar a dos dígitos después del punto decimal
      if (currentValue.indexOf('.') !== -1) {
          var dotSplit = currentValue.split('.');
          if (dotSplit[1].length >= 2) {
              event.preventDefault();
          }
      }
  });
});

//Validación para que solamente se escriban números en la cantidad
$(document).ready(function() {
  $("#cantidadProducto").on("input", function() {
      var value = $(this).val();

      // Eliminar cualquier carácter que no sea un número
      value = value.replace(/\D/g, '');

      // Establecer el nuevo valor en el campo
      $(this).val(value);
  });
});


//Validación para que solamente se escriban números, un punto y dos números antes y después del punto en el descuento
$(document).ready(function() {
  $("#descuentoProducto").on("input", function() {
      var value = $(this).val();

      // Eliminar cualquier carácter que no sea un número o un punto decimal
      value = value.replace(/[^0-9.]/g, '');

      // Separar la parte entera de la decimal
      var parts = value.split('.');
      var integerPart = parts[0];
      var decimalPart = parts[1];

      // Limitar la parte entera a dos dígitos
      if (integerPart.length > 2) {
          integerPart = integerPart.slice(0, 2);
      }

      // Si hay exactamente dos dígitos en la parte entera, agregar automáticamente un punto
      if (integerPart.length === 2 && decimalPart === undefined) {
          integerPart += '.';
      }

      // Limitar la parte decimal a dos dígitos
      if (decimalPart && decimalPart.length > 2) {
          decimalPart = decimalPart.slice(0, 2);
      }

      // Reconstruir el valor del campo con las limitaciones
      var newValue = integerPart;
      if (decimalPart !== undefined) {
          newValue += '.' + decimalPart;
      }

      // Establecer el nuevo valor en el campo
      $(this).val(newValue);
  });
});

//Validaciones de actualizar

//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios
$(document).ready(function() {
  $("#nombreProductoA").on("keypress", function(event) {
      var inputValue = event.which;
      // Permitir solo letras y algunos caracteres especiales como espacio, guión, etc.
      if (!(inputValue >= 65 && inputValue <= 90) && // letras mayúsculas
          !(inputValue >= 97 && inputValue <= 122) && // letras minúsculas
          !(inputValue == 32 || inputValue == 45 || inputValue == 46 || inputValue == 44)) { // espacio, guión, punto, coma
          event.preventDefault();
      }
  });
});

//Validación para que solamente se escriban números, un punto y dos números luego del punto en el precio
$(document).ready(function() {
  $("#PrecioProductoA").on("keypress", function(event) {
      var inputValue = event.key;
      var currentValue = $(this).val();

      // Permitir solo números y un único punto decimal
      if (isNaN(inputValue) && inputValue !== '.') {
          event.preventDefault();
      }

      // Permitir solo un punto decimal
      if (inputValue === '.' && currentValue.indexOf('.') !== -1) {
          event.preventDefault();
      }

      // Limitar a dos dígitos después del punto decimal
      if (currentValue.indexOf('.') !== -1) {
          var dotSplit = currentValue.split('.');
          if (dotSplit[1].length >= 2) {
              event.preventDefault();
          }
      }
  });
});

//Validación para que solamente se escriban números en la cantidad
$(document).ready(function() {
  $("#cantidadProductoA").on("input", function() {
      var value = $(this).val();

      // Eliminar cualquier carácter que no sea un número
      value = value.replace(/\D/g, '');

      // Establecer el nuevo valor en el campo
      $(this).val(value);
  });
});


//Validación para que solamente se escriban números, un punto y dos números antes y después del punto en el descuento
$(document).ready(function() {
  $("#descuentoProductoA").on("input", function() {
      var value = $(this).val();

      // Eliminar cualquier carácter que no sea un número o un punto decimal
      value = value.replace(/[^0-9.]/g, '');

      // Separar la parte entera de la decimal
      var parts = value.split('.');
      var integerPart = parts[0];
      var decimalPart = parts[1];

      // Limitar la parte entera a dos dígitos
      if (integerPart.length > 2) {
          integerPart = integerPart.slice(0, 2);
      }

      // Si hay exactamente dos dígitos en la parte entera, agregar automáticamente un punto
      if (integerPart.length === 2 && decimalPart === undefined) {
          integerPart += '.';
      }

      // Limitar la parte decimal a dos dígitos
      if (decimalPart && decimalPart.length > 2) {
          decimalPart = decimalPart.slice(0, 2);
      }

      // Reconstruir el valor del campo con las limitaciones
      var newValue = integerPart;
      if (decimalPart !== undefined) {
          newValue += '.' + decimalPart;
      }

      // Establecer el nuevo valor en el campo
      $(this).val(newValue);
  });
});


