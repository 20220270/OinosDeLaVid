// JavaScript para abrir la modal al hacer clic en el botón
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

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btnENviarValoracion');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Cerrar la modal modalValoracion
            const modalValoracion = bootstrap.Modal.getInstance(document.getElementById('modalValoracion'));
            modalValoracion.hide();

            // Mostrar la modal modalEnviarValoracion después de que la modal modalValoracion se haya cerrado completamente
            modalValoracion._element.addEventListener('hidden.bs.modal', function () {
                const modalEnviarValoracion = new bootstrap.Modal(document.getElementById('modalEnviarValoracion'));
                modalEnviarValoracion.show();
            });
        });
    });
});


document.getElementById("btnVerPerfil").addEventListener("click", function () {
    window.location.href = "perfil.html";
});
