/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';

// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');


MAIN.classList.add('container');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/


const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const DATA = await fetchData(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('login.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="../../resources/Imagenes/logo.png" alt="" width="70 px" height="70 px"
                        class="d-inline-block">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" id="menu">
                            <a class="nav-link active" aria-current="page" href="index.html#menuVinos"
                                onclick="scrollToElement('catalogo')">Menú</a>
                        </li>
                        <li class="nav-item" id="nos">
                            <a class="nav-link" href="index.html#sobreus" onclick="scrollToElement('sobreNos')">Sobre nosotros</a>
                        </li>
                        <li class="nav-item" id="Contac">
                            <a class="nav-link" href="miscompras.html">Ver mis compras</a>
                        </li>
                        <li class="nav-item" id="ses">
                            <a class="nav-link" onclick="logOut()">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>

                <button class="btn" type="submit" id="btnVerPerfil"> <a href="perfil.html" class="textoVerPerfil">${DATA.username}</a></button>


            </div>
        </nav>
                </header>
            `);
        } else {
            location.href = 'index.html';
        }
    } else {
        // Se agrega el encabezado de la página web antes del contenido principal.
        MAIN.insertAdjacentHTML('beforebegin', `
            <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="../../resources/Imagenes/logo.png" alt="" width="70 px" height="70 px"
                        class="d-inline-block">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" id="menu">
                            <a class="nav-link active" aria-current="page" href="index.html#menuVinos"
                                onclick="scrollToElement('catalogo')">Menú</a>
                        </li>
                        <li class="nav-item" id="nos">
                            <a class="nav-link" href="index.html#sobreus" onclick="scrollToElement('sobreNos')">Sobre nosotros</a>
                        </li>
                        <li class="nav-item" id="ses">
                            <a class="nav-link" href="login.html">Iniciar sesión</a>
                        </li>
                        <li class="nav-item" id="ses">
                            <a class="nav-link" href="registrarse.html">Crear cuenta</a>
                        </li>
                    </ul>
                </div>

                <button class="btn" type="submit" id="btnVerPerfil"> <a href="perfil.html" class="textoVerPerfil">Mi perfil</a></button>


            </div>
        </nav>
            </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
        <footer>
        <div class="container-fluid bg-dark text-light w-100">

        <div id="frases" class="carousel slide mt-5 bg-dark text-white mb-3" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active mt-5 mb-5">
                  <p class="text-center mt-3 fs-4">
                    «El vino lava nuestras inquietudes,
                    enjuaga el alma hasta el fondo y asegura la curación de la tristeza.»
                  </p>
                  <p class="text-center fw-bold fs-5">
                    Lucio Anneo Séneca.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-5">
                    «El vino, mientras más se envejece,
                    más calor tiene: al contrario de nuestra naturaleza, que mientras más vive, más se va enfriando.»
        
                  </p>
                  <p class="text-center fw-bold fs-5">
                    Félix Lope de Vega y Carpio.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-2">
                    «En el vino (está) la verdad».
                  </p>
                  <p class="text-center fw-bold fs-3">
                    Plinio «el viejo».
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-2">
                    «Vino y pan movieron ejércitos.»
                  </p>
                  <p class="text-center fw-bold fs-3">
                    Juan Abellán.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-3">
                    “El lenguaje es vino en los labios.”
                  </p>
                  <p class="text-center fw-bold fs-3">
                    Virginia Woolf.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center fs-4">
                    “Hay más filosofía y sabiduría en una botella de vino, que en todos los libros.”
                  </p>
                  <p class="text-center fw-bold fs-4">
                    Louis Pasteur.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-3">
                    “El vino es poesía embotellada.”
                  </p>
                  <p class="text-center fw-bold fs-3">
                    Robert Louis Stevenson.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-4">
                    “El vino puede ser mejor profesor que la tinta, y charlar es a menudo mejor que los libros.”
                  </p>
                  <p class="text-center fw-bold fs-4">
                    Stephen Fry.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-3">
                    “Donde no hay vino no hay amor.”
                  </p>
                  <p class="text-center fw-bold fs-3">
                    Eurípides.
                  </p>
                </div>
                <div class="carousel-item mt-5 mb-5">
                  <p class="text-center mt-3 fs-3">
                    «El que al mundo vino y no toma vino, ¿a qué vino?”
                  </p>
                  <p class="text-center fw-bold fs-3">
                    Bernardo Piuma.
                  </p>
                </div>
              </div>
        
                <button class="carousel-control-prev mt-3" type="button" data-bs-target="#frases" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden" id="prev">Previous</span>
                </button>
                <button class="carousel-control-next mt-3" type="button" data-bs-target="#frases" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden" id="next">Next</span>
                </button>
            </div>
        
            <div class="container">
              <div class="row">
                <div class="col d-flex flex-column align-items-center"> <!--Alineamos la imagen y el texto al centro-->
                  <img src="../../resources/Imagenes/logoBlanco.png" alt="logo" id="imagenLL" height="130px" width="130px">
                  <h6 class="text-center mt-3">
                    <img src="../../resources/Imagenes/ubicacion.png" alt="logo" id="imagenLL" height="15px" width="10px">
                    Avenida Aguilares 218 San Salvador CP, San Salvador 1101
                  </h6>
                </div>
                <div class="col d-flex flex-column align-items-center mt-4">
                  <ul class="list-unstyled text-center">
                      <li class="fw-bold my-2">Redes sociales:</li>
                      <li>
                          <a href="https://twitter.com/" class="text-decoration-none text-white">
                              <img src="../../resources/Imagenes/LogoTwiiter.png" alt="" id="LogoTwiiter" height="50px" width="50px">
                              
                          </a>
                          <a href="https://instagram.com/" class="text-decoration-none text-white">
                              <img src="../../resources/Imagenes/LogoInsta.png" alt="" id="LogoInsta" height="50px" width="50px">
                              
                          </a>
                      </li>
                      <li class="mt-2">¡Síguenos para mantenerte informado sobre nuestros productos y sobre nosotros!</li>
                  </ul>
              </div>
                <div class="col">
                  <ul class="list-unstyled">
                    <li class="fw-bold my-2">Ante cualquier duda o
                      problema dentro de la tienda en línea, comuníquese a los siguientes números de teléfono:
                    </li>
                    <li class="mt-4">
                      +503 7215-0999
                    </li>
                    <li class="mt-4">
                      +503 7835-5374
                    </li>
                    <li class="mt-4">
                      +503 7497-5439
                    </li>
        
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul class="list-unstyled">
                    <li class="fw-bold my-2">Nuestros horarios de atención:</li>
                    <li class="mt-4">
                      De lunes a viernes, de 8:00 a.m. - 5:00 p.m.
                    </li>
                    <li class="mt-4">
                      Sábados, de 8:00 a.m. - 12:00 p.m.
                    </li>
                    <li class="mt-4">
                      Domingo, de 6:00 a.m. a 11:30 a.m.
                    </li>
        
                  </ul>
                </div>
              </div>
              <hr class="my-4">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p>&copy; 2024 Copyright <a href="#" class="text-white">Oinos de la vid</a></p>
                </div>
              </div>
            </div>
        
        </div>
        </footer>
    `);
}