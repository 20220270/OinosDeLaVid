// JavaScript para abrir la modal al hacer clic en el botón
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.mostrarModalValoracion');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('modalValoracion'));
            modal.show();
        });
    });
})

document.getElementById("perfilUsuario").addEventListener("click", function () {
    location.href = "perfil.html";
  });


