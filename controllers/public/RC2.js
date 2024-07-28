document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnVo").addEventListener("click", function () {
      location.href = "login.html";
  });

  document.getElementById("btnEnviarCod").addEventListener("click", function () {
    // Obtener el código introducido por el usuario
    const inputCode = document.getElementById("Codigo").value;

    // Obtener el código almacenado en localStorage
    const storedCode = localStorage.getItem("recoveryCode");
    console.log("Código almacenado:", storedCode);

    // Verificar si el código introducido coincide con el almacenado
    if (inputCode === storedCode) {
        sweetAlert(1, 'Código verificado correctamente', true);
        // Redirigir al usuario a la página de cambio de contraseña
        location.href = "recuperacioncontraseña_contra.html";
    } else {
        sweetAlert(2, 'El código introducido no es correcto', false);
    }
});

  document.getElementById("btnReenviar").addEventListener("click", async function () {
      // Reenvía el código al correo del usuario
      const email = localStorage.getItem("userEmail"); // Suponiendo que el email se almacena en localStorage
      const codigo = localStorage.getItem("recoveryCode");

      const response = await enviarEmail(codigo, email);
      if (response) {
          sweetAlert(1, 'Código reenviado correctamente', true);
      } else {
          sweetAlert(2, 'No se ha podido reenviar el código', false);
      }
  });

  // Simulación de la función sweetAlert para demostración
  function sweetAlert(type, message, timer) {
      if (type === 1) {
          alert("Success: " + message);
      } else if (type === 2) {
          alert("Error: " + message);
      }
  }

  const enviarEmail = async (codigo, email) => {
      emailjs.init("UgoKqlMqOXVP1NoFW"); // Reemplaza con tu User ID de EmailJS

      const templateParams = {
          code: codigo,
          from_name: 'Oinos de la Vid',
          to_email: email,
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
          return false;
      }
  }
});
