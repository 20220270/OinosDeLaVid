
function validarFormulario(event) {
  // Prevenir el envío del formulario si hay errores
  event.preventDefault();

  // Obtener el valor del campo de correo electrónico
  var correo = document.getElementById("IngreseCorreo").value.trim();

  // Expresión regular para validar formato de correo electrónico
  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificar si el correo está lleno y tiene un formato válido
  if (correo === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
  } 
  
  if (!correoRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
  }

  // Si el correo es válido, redirigir al usuario a recuperarcontraseña_codigo.html
  window.location.href = 'recuperarcontraseñacodigo.html';
}
document.getElementById("btnVo").addEventListener("click", function () {
    location.href = "login.html";
  });

  document.getElementById("btnEnviarCod").addEventListener("click", function () {
    location.href = "RecuperacionContraseñaCodigo.html";
  });


  // reglas de buen progam en recu1

  