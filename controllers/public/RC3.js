const FORM_CONTRA = document.getElementById('formClave');
const API_CLIENTE = 'services/public/cliente.php';

document.getElementById("btnRegre").addEventListener("click", function () {
    location.href = "login.html";
  });


document.getElementById("btnClave").addEventListener("click", async function () {
    const FORM = new FormData(FORM_CONTRA);

    const email = localStorage.getItem("email");

    FORM.append('IngreseCorreo', email);

    const DATA = await fetchData(API_CLIENTE, 'updateClave', FORM);
    if (DATA.status) {
        sweetAlert(1, DATA.message, true, 'login.html');
    } else {
        sweetAlert(2, DATA.error, false);
    }
});