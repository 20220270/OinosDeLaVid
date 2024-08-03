const FORM_CONTRA = document.getElementById('formClave');
const API_CLIENTE = 'services/public/cliente.php';
const API_ADMIN = 'services/admin/administrador.php';

document.getElementById("btnRegre").addEventListener("click", function () {
    location.href = "login.html";
  });


document.getElementById("btnClave").addEventListener("click", async function () {
    const FORM = new FormData(FORM_CONTRA);

    const email = localStorage.getItem("email");
    FORM.append('IngreseCorreo', email);

    // Obtener la ruta actual
    const currentPath = window.location.pathname;

    // Determinar la API adecuada según la ruta actual
    if (currentPath.includes('admin')) {
        const DATA = await fetchData(API_ADMIN, 'updateClave', FORM);
        if (DATA.status) {
            sweetAlert(1, DATA.message, true, 'index.html');
        } else {
            sweetAlert(2, DATA.error, false);
        }
  
    } else if (currentPath.includes('public')) {
        const DATA = await fetchData(API_CLIENTE, 'updateClave', FORM);
        if (DATA.status) {
            sweetAlert(1, DATA.message, true, 'login.html');
        } else {
            sweetAlert(2, DATA.error, false);
        }
    } else {
        sweetAlert(2, "No se pudo determinar la API adecuada", false);
        return;
    }

    // Llamar a la API adecuada
   
});