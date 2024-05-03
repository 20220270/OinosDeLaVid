const addForm = document.getElementById('sessionForm');
const USER_API = 'services/admin/administrador.php';

addForm.addEventListener('submit', async(event)=>{
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(addForm);
    // Petición para iniciar sesión.
    const DATA = await fetchData(USER_API, 'logIn', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        sweetAlert(1, DATA.message, true, 'Menu.html');
    } else {
        sweetAlert(2, DATA.error, false);
    }
})



