
const FORM_CORREO = document.getElementById("Correo");
const API_CLIENTE = 'services/public/cliente.php';
const API_ADMIN = 'services/admin/administrador.php';

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("btnVo").addEventListener("click", function () {
  location.href = "login.html";
});

document.getElementById("btnVerificar").addEventListener("click", async function () {
  // Generar el código aleatorio
  const CODIGO = generateRandomCode(6); // Puedes ajustar la longitud del código aquí

  const EMAIL = document.getElementById("IngreseCorreo").value;

  const FORM = new FormData(FORM_CORREO);
  const DATA_CLIENTE = await fetchData(API_CLIENTE, 'checkCorreo', FORM);
  const DATA_ADMIN = await fetchData(API_ADMIN, 'checkCorreo', FORM);
  let DATA, NOMBRE;

  if (DATA_CLIENTE.status) {
    DATA = DATA_CLIENTE;
    NOMBRE = DATA_CLIENTE.dataset.nombre_cliente;
  const RESPONSE_EMAIL = await enviarEmail(CODIGO, EMAIL, NOMBRE);
  if (RESPONSE_EMAIL) {
    // Guardar el código en localStorage
    localStorage.setItem("codigo", CODIGO);
    localStorage.setItem("email", EMAIL);
    localStorage.setItem("nombre", NOMBRE);
    sweetAlert(1, DATA_CLIENTE.message, true, 'recuperacioncontraseña_codigo.html');
  } else {
    sweetAlert(2, DATA_CLIENTE.error, false);
  }

  } else if (DATA_ADMIN.status) {
    DATA = DATA_ADMIN;
    NOMBRE = DATA_ADMIN.dataset.nombre_admistrador;
  const RESPONSE_EMAIL = await enviarEmail(CODIGO, EMAIL, NOMBRE);
  if (RESPONSE_EMAIL) {
    // Guardar el código en localStorage
    localStorage.setItem("codigo", CODIGO);
    localStorage.setItem("email", EMAIL);
    localStorage.setItem("nombre", NOMBRE);
    sweetAlert(1, DATA.message, true, 'recuperarcontraseñacodigo.html');
  } else {
    sweetAlert(2, DATA.error, false);
  }
  } else {
    sweetAlert(2, 'El correo ingresado no está registrado en el sistema', false);
    return;
  }
  
});

const enviarEmail = async (codigo, email, nombre) => {
  emailjs.init("UgoKqlMqOXVP1NoFW"); // Reemplaza con tu User ID de EmailJS

  const templateParams = {
    code: codigo,
    nombre: nombre,
    from_name: 'Oinos de la Vid',
    email_cliente: email,
  };

  try {
    const response = await emailjs.send('service_hnlewit', 'template_a4w4ouh', templateParams);
    console.log('Correo enviado exitosamente:', response.status, response.text);
    if (response.status !== 200) {
      throw new Error('Error al enviar el correo');
    }
    return true;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
}

function generateRandomCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
} 
}); 