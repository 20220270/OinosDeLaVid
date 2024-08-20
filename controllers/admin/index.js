const LOGIN = document.getElementById('sessionForm');
const SIGNUP = document.getElementById('FormValidacion');
const MODAL = new bootstrap.Modal('#modalRegistrasrte');
const USER_API = 'services/admin/administrador.php';
const NIVELESUSUARIO_API = 'services/admin/nivelesusuario.php';

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    //loadTemplate();
    // Petición para consultar los usuarios registrados.

    
    const DATA = await fetchData(USER_API, 'readUsers');
    
    //fillSelect(NIVELESUSUARIO_API, 'readAll', 'selectNivelAdmin');

    // Se comprueba si existe una sesión, de lo contrario se sigue con el flujo normal.
    if (DATA.session) {
        // Se direcciona a la página web de bienvenida.
        location.href = 'menu.html';
    } else if (DATA.status) {
        // Se establece el título del contenido principal.
        //MAIN_TITLE.textContent = 'Iniciar sesión';
        // Se muestra el formulario para iniciar sesión.
        LOGIN.classList.remove('d-none');
        sweetAlert(4, DATA.message, true);
    } else {
        // Se establece el título del contenido principal.
        //MAIN_TITLE.textContent = 'Registrar primer usuario';
        // Se muestra el formulario para registrar el primer usuario.
        
        MODAL.show();
        sweetAlert(4, DATA.error, true);
    }
});


// Método del evento para cuando se envía el formulario de registro del primer usuario.
SIGNUP.addEventListener('submit', async (event) => {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(SIGNUP);



    // Petición para registrar el primer usuario del sitio privado.
    const DATA = await fetchData(USER_API, 'signUp', FORM);


    
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
            
        sweetAlert(1, DATA.message, true, 'index.html');
        
    } else {
        sweetAlert(2, DATA.error, false);
    }
});


// Constantes para los componentes del modal de inicio de sesion 


LOGIN.addEventListener('submit', async(event)=>{
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(LOGIN);
    // Petición para iniciar sesión.
    const DATA = await fetchData(USER_API, 'logIn', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        sweetAlert(1, DATA.message, true, 'menu.html');
    } else {
        sweetAlert(2, DATA.error, false);
    }
})





