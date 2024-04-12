document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#btnGuardarAcCo');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Cerrar la modal ModalActualizarContraseña
            const modalActualizarContraseña = bootstrap.Modal.getInstance(document.getElementById('ModalActualizarContraseña'));
            modalActualizarContraseña.hide();

            // Mostrar la modal modalContraCtualizada
            const modalContraCtualizada = new bootstrap.Modal(document.getElementById('modalContraCtualizada'));
            modalContraCtualizada.show();
        });
    });
});
