//agregar cantidad al carrito

//agregar cantidad al carrito y actualizarlo al agregar mas productos

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btnAgregarAlCarrito');
  const textoCarrito = document.getElementById('textoCar');
  const inputsCantidad = document.querySelectorAll('input[type="number"]');

  let cantidadCarrito = 0;

  buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
          alert("Su producto ha sido registrado correctamente");
          cantidadCarrito += parseInt(inputsCantidad[index].value); // Sumar la cantidad del input al carrito
          actualizarTextoCarrito();
      });
  });

  function actualizarTextoCarrito() {
      textoCarrito.innerText = `Ver carrito (${cantidadCarrito})`;
  }

  // Actualizar el texto del carrito cuando se cambie la cantidad desde los inputs
  inputsCantidad.forEach(input => {
      input.addEventListener('input', function() {
          cantidadCarrito = 0;
          inputsCantidad.forEach(input => {
              cantidadCarrito += parseInt(input.value);
          });
          actualizarTextoCarrito();
      });
  });
});

/*document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btnAgregarAlCarrito');
  const textoCarrito = document.getElementById('textoCar');

  let cantidadCarrito = 0;

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          alert("Su producto ha sido registrado correctamente");
          cantidadCarrito++;
          textoCarrito.innerText = `Ver carrito (${cantidadCarrito})`;
      });
  });
});*/

document.getElementById("textoCar").addEventListener("click", function () {
  window.location.href = "carrito.html";
});

document.getElementById("btnVerPerfil").addEventListener("click", function () {
  window.location.href = "perfil.html";
});


    document.querySelectorAll('.card').forEach(card => {
        const input = card.querySelector('input[type="number"]');
        const incrementBtn = card.querySelector('#incrementBtn');
        const decrementBtn = card.querySelector('#decrementBtn');
        const toast = document.getElementById('toast');

        incrementBtn.addEventListener('click', () => {
            input.stepUp();
        });

        decrementBtn.addEventListener('click', () => {
            if (input.value > 0) {
                input.stepDown();
            } else {
                const bsToast = new bootstrap.Toast(toast);
                bsToast.show();
            }
        });
    });
