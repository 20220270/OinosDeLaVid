//validaciones

//validación para los campos del nombre y apellido
//Validación para que solamente se escriban letras, pero que pueda haber guiones y espacios
$(document).ready(function() {
    $("#nombreCliente").on("keypress", function(event) {
        var inputValue = event.which;
        // Permitir solo letras y algunos caracteres especiales como espacio, guión, etc.
        if (!(inputValue >= 65 && inputValue <= 90) && // letras mayúsculas
            !(inputValue >= 97 && inputValue <= 122) && // letras minúsculas
            !(inputValue == 32 || inputValue == 45 || inputValue == 46 || inputValue == 44)) { // espacio, guión, punto, coma
            event.preventDefault();
        }
    });
  });

  $(document).ready(function() {
    $("#apellidoCliente").on("keypress", function(event) {
        var inputValue = event.which;
        // Permitir solo letras y algunos caracteres especiales como espacio, guión, etc.
        if (!(inputValue >= 65 && inputValue <= 90) && // letras mayúsculas
            !(inputValue >= 97 && inputValue <= 122) && // letras minúsculas
            !(inputValue == 32 || inputValue == 45 || inputValue == 46 || inputValue == 44)) { // espacio, guión, punto, coma
            event.preventDefault();
        }
    });
  });

  //validación para el dui, unicamente ingresar números y luego del octavo se escriba un guión

  vanillaTextMask.maskInput({
    inputElement: document.getElementById('duiCliente'),
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
});


//validación para el teléfono
vanillaTextMask.maskInput({
    inputElement: document.getElementById('telefonoCliente'),
    mask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
});


  