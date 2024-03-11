document.addEventListener('DOMContentLoaded', function() {
    const textoCarrito = document.getElementById('textoCarrito');
    const inputCantidad = document.querySelector('input[type="number"]');

    // Obtener la cantidad del carrito del texto del carrito
    let cantidadCarrito = obtenerCantidadCarrito(textoCarrito.innerText);

    // Mostrar la cantidad del carrito en el input de cantidad
    inputCantidad.value = cantidadCarrito;

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


document.getElementById("perfilUsuario").addEventListener("click", function () {
    window.location.href = "perfil.html";
  });