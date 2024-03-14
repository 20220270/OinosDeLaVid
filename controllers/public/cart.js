document.addEventListener('DOMContentLoaded', function() {
    const textoCarrito = document.getElementById('textoCarrito');
    const inputCantidad = document.querySelector('input[type="number"]');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');

    // Obtener la cantidad del carrito del texto del carrito
    let cantidadCarrito = obtenerCantidadCarrito(textoCarrito.innerText);

    // Mostrar la cantidad del carrito en el input de cantidad
    inputCantidad.value = cantidadCarrito;

    // Event listener para el botón de incremento
    incrementBtn.addEventListener('click', function() {
        if (cantidadCarrito > 1) {
            cantidadCarrito ++;
            actualizarCantidadCarrito();
        }
    });

    // Event listener para el botón de decremento
    decrementBtn.addEventListener('click', function() {
        if (cantidadCarrito > 1) {
            cantidadCarrito--;
            actualizarCantidadCarrito();
        }
    });

    function actualizarCantidadCarrito() {
        inputCantidad.value = cantidadCarrito;
        textoCarrito.innerText = `Agregar productos (${cantidadCarrito})`;
    }

    function obtenerCantidadCarrito(textoCarrito) {
        // Extraer el número entre paréntesis del texto del carrito
        const regex = /\((\d+)\)/;
        const match = textoCarrito.match(regex);
        if (match && match[1]) {
            return parseInt(match[1]);
        }
        return 0; // Si no se encuentra ningún número, devolver 0
    }
});

//Codigo para el aumento o decremento de un producto en el pedido
document.querySelectorAll('.card').forEach(card => {
    const input = card.querySelector('input[type="number"]');
    const incrementBtn = card.querySelector('#incrementBtn');
    const decrementBtn = card.querySelector('#decrementBtn');
    const toast = document.getElementById('toast');

    incrementBtn.addEventListener('click', () => {
        input.stepUp();
    });

    decrementBtn.addEventListener('click', () => {
        if (input.value > 1) {
            input.stepDown();
        } else {
            const bsToast = new bootstrap.Toast(toast);
            bsToast.show();
        }
    });
});

document.getElementById("perfilUsuario").addEventListener("click", function () {
    window.location.href = "perfil.html";
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cantidadProductos = urlParams.get('cantidad');
  
    if (cantidadProductos !== null) {
      document.getElementById('cantidadProductos').value = cantidadProductos;
    }
  });

  //Actualizar la cantidad dentro del carrito
  document.addEventListener('DOMContentLoaded', function() {
    const inputCantidad = document.querySelector('input[type="number"]');
    const incrementBtns = document.querySelectorAll('#incrementBtn1');
    const decrementBtns = document.querySelectorAll('#decrementBtn1');

    // Obtener la cantidad del carrito del valor del input de cantidad
    let cantidadCarrito = parseInt(inputCantidad.value);

    // Event listener para los botones de incremento
    incrementBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cantidadCarrito++;
            actualizarCantidadCarrito();
        });
    });

    // Event listener para los botones de decremento
    decrementBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (cantidadCarrito > 1) {
                cantidadCarrito--;
                actualizarCantidadCarrito();
            }
        });
    });

    function actualizarCantidadCarrito() {
        inputCantidad.value = cantidadCarrito;
    }
});

  