document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnVo").addEventListener("click", function () {
      location.href = "login.html";
  });

  document.getElementById("btnEnviarCod").addEventListener("click", function () {
    // Obtener el código introducido por el usuario
    const inputCode = document.getElementById("Codigo").value;

    // Obtener el código almacenado en localStorage
    const storedCode = localStorage.getItem("codigo");
    console.log("Código almacenado:", storedCode);
    const currentPath = window.location.pathname;

    if (currentPath.includes('admin')) {
      if (inputCode === storedCode) {
        sweetAlert(1, "El codigo es correcto", true, 'recuperarcontraseñaactualizarcontra.html');
      } else {
        sweetAlert(2, "error", false);
      }

  } else if (currentPath.includes('public')) {
    if (inputCode === storedCode) {
      sweetAlert(1, "El codigo es correcto", true, 'recuperacioncontraseña_contra.html');
    } else {
      sweetAlert(2, "error", false);
    }
  } 
  else {
    sweetAlert(2, "No se pudo determinar la API adecuada", false);
    return;
  }
    
});

  document.getElementById("btnReenviar").addEventListener("click", async function () {
      // Reenvía el código al correo del usuario
      const EMAIL = localStorage.getItem("email"); // Suponiendo que el email se almacena en localStorage
      console.log("Email almacenado:", EMAIL);
      const CODIGO = localStorage.getItem("codigo");
      const NOMBRE = localStorage.getItem("nombre");

      const response = await enviarEmail(CODIGO, EMAIL, NOMBRE);
      if (response) {
          sweetAlert(1, 'Código reenviado correctamente', true);
      } else {
          sweetAlert(2, 'No se ha podido reenviar el código', false);
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

});
