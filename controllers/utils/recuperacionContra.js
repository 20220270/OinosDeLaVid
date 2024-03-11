
/*Código para tener la barra roja que esta encima de la pantalla, el logo de la empresa y el texto "Recuperación de contraseña"*/
const HEADER = document.querySelector('header');
HEADER.innerHTML = `
<div class="red-bar" id="barra"></div>
<div class="container text-center">
    <div class="row">
        <div class="col-sm-12 col-md-5">
            <img src="../../resources/Imagenes/logo.png" width="200px" height="200px" alt="logo">
        </div>
        <div class="col-sm-12 col-md-7">
            <h1>Recuperación de contraseña</h1>
        </div>
    </div>
</div>
<hr>
`;

document.getElementById("btnEnviarCod").addEventListener("click", function () {
    location.href = "RecuperarContraIngresarCodigo.html";
  });

  document.getElementById("btnVo").addEventListener("click", function () {
    location.href = "index.html";
  });

  document.getElementById("btnVerificar").addEventListener("click", function () {
    location.href = "RecuperarContraCambiarContra.html";
  });

  document.getElementById("btnRegre").addEventListener("click", function () {
    location.href = "index.html";
  });

  document.getElementById("btnVolver").addEventListener("click", function () {
    location.href = "index.html";
  });