
const FORM_CORREO = document.getElementById("Correo");
const API_CLIENTE = 'services/public/cliente.php';

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("btnVo").addEventListener("click", function () {
  location.href = "login.html";
});

document.getElementById("btnVerificar").addEventListener("click", async function () {
  // Generar el código aleatorio
  const CODIGO = generateRandomCode(6); // Puedes ajustar la longitud del código aquí

  const FORM = new FormData(FORM_CORREO);
  const DATA = await fetchData(API_CLIENTE, 'checkCorreo', FORM);
  const NOMBRE = DATA.dataset.nombre_cliente;

  if (DATA.status) {
    
  // Enviar el correo y obtener la respuesta
  const RESPONSE_EMAIL = await enviarEmail(CODIGO, document.getElementById("IngreseCorreo").value, NOMBRE);
    if (RESPONSE_EMAIL) {
      // Guardar el código en localStorage
      localStorage.setItem("codigo", CODIGO);
      localStorage.setItem("email", document.getElementById("IngreseCorreo").value);
      localStorage.setItem("nombre", NOMBRE);
      sweetAlert(1, DATA.message, true, 'recuperacioncontraseña_codigo.html');
  } else {
    sweetAlert(2, DATA.error, false);
  }
  }
  else {
    sweetAlert(2, DATA.error, false);
  }
  // Verificar la respuesta y actuar en consecuencia
  
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