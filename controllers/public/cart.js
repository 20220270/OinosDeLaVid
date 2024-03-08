//agregar cantidad al carrito

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btnAgregarAlCarrito');
    const textoCarrito = document.getElementById('textoCar');

    let cantidadCarrito = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            cantidadCarrito++;
            textoCarrito.innerText = `Ver carrito (${cantidadCarrito})`;
        });
    });
});

document.getElementById("btnVerPerfil").addEventListener("click", function () {
    window.location.href = "perfil.html";
  });