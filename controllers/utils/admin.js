/*
*   Controlador de uso general en las páginas web del sitio privado.
*   Sirve para manejar la plantilla del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/admin/administrador.php';
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
    // Se verifica si el usuario está autenticado, de lo contrario se envía a iniciar sesión.
    if (DATA.session) {
        // Se comprueba si existe un alias definido para el usuario, de lo contrario se muestra un mensaje con la excepción.
        if (DATA.status) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                <div class="container-fluid">
                    <a class=" btn navbar-brand" onclick="logOut()">Cerrar sesion</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="menu.html">Menú</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="productos.html">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="categoria.html">Categorías</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="marcas.html">Marcas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="clientes.html">Clientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="administradores.html">Administradores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="nivelesusuario.html">Niveles</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="ordenes.html">Ordenes</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="valoraciones.html">Valoraciones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="perfil.html">Mi perfil</a>
                            </li>
        
                        </ul>
                    </div>
                </div>
            </nav>
                </header>
            `);
            // Se agrega el pie de la página web después del contenido principal.
            MAIN.insertAdjacentHTML('afterend', `
                <footer>
                <div class="container-fluid bg-dark text-light mt-5">
                <div class="mt-5">
                    <br>
                    <h3 class="text center mt">Oinos de la Vid</h3>
                    <p>Recuerde hacer sus registro con precaución. Asegúrese de tener un buen
                        manejo del sistema para evitar problemas con el mismo.
                    </p>
    
                    <hr>
                </div>
    
                <div class="row justify-content-around text-center text-md-start">
                    <div class="col-md-2 text-center">
    
                        <img src="../../resources/Imagenes/logoBlanco.png" alt="logo" id="imagenLL">
                    </div>
    
                    <div class="col-md-3">
    
                        <ul class="list-unstyled">
                            <li class="fw-bold my-2">Redes sociales:</li>
                            <li><a href="#" class="text-decoration-none text-white">
                                    <img src="../../resources/Imagenes/LogoTwiiter.png" alt="" id="LogoTwiiter">
                                    <img src="../../resources/Imagenes/LogoInsta.png" alt="" id="LogoTwiiter">
                                </a>
                            </li>
                            <br>
                            <br>
                            Redes sociales de Oinos de la Vid
                        </ul>
                    </div>
    
                    <div class="col-md-2">
                        <ul class="list-unstyled">
                            <li class="fw-bold my-2">Enlace a:</li>
                            <li><a href="/OinosDeLaVid/views/public/index.html">
                                    <img src="../../resources/Imagenes/irSitioP.png" alt="Sitio publico" id="irSitioP">
                                </a></li>
    
                        </ul>
                    </div>
    
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12 text-center pt-2">
                        <p>&copy; 2024 Copyright <a href="#" class="text-white">Oinos de la vid</a></p>
                    </div>
                </div>
    
            </div>
                </footer>
            `);
        } else {
            sweetAlert(3, DATA.error, false, 'index.html');
        }
    } else {
        // Se comprueba si la página web es la principal, de lo contrario se direcciona a iniciar sesión.
        if (location.pathname.endsWith('index.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
            <header>
            <nav class="navbar navbar-expand-lg fixed-top navbar-light">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                </nav>
            </header>
            `);
            // Se agrega el pie de la página web después del contenido principal.
            MAIN.insertAdjacentHTML('afterend', `
            <footer>
            <div class="container-fluid bg-dark text-light mt-5">
            <div class="mt-5">
                <br>
                <h3 class="text center mt">Oinos de la Vid</h3>
                <p>Recuerde hacer sus registro con precaución. Asegúrese de tener un buen
                    manejo del sistema para evitar problemas con el mismo.
                </p>

                <hr>
            </div>

            <div class="row justify-content-around text-center text-md-start">
                <div class="col-md-2 text-center">

                    <img src="../../resources/Imagenes/logoBlanco.png" alt="logo" id="imagenLL">
                </div>

                <div class="col-md-3">

                    <ul class="list-unstyled">
                        <li class="fw-bold my-2">Redes sociales:</li>
                        <li><a href="#" class="text-decoration-none text-white">
                                <img src="../../resources/Imagenes/LogoTwiiter.png" alt="" id="LogoTwiiter">
                                <img src="../../resources/Imagenes/LogoInsta.png" alt="" id="LogoTwiiter">
                            </a>
                        </li>
                        <br>
                        <br>
                        Redes sociales de Oinos de la Vid
                    </ul>
                </div>

                <div class="col-md-2">
                    <ul class="list-unstyled">
                        <li class="fw-bold my-2">Enlace a:</li>
                        <li><a href="/OinosDeLaVid/views/public/index.html">
                                <img src="../../resources/Imagenes/irSitioP.png" alt="Sitio publico" id="irSitioP">
                            </a></li>

                    </ul>
                </div>

            </div>
            <hr>
            <div class="row">
                <div class="col-md-12 text-center pt-2">
                    <p>&copy; 2024 Copyright <a href="#" class="text-white">Oinos de la vid</a></p>
                </div>
            </div>

        </div>
            </footer>
            `);
        } else {
            location.href = 'index.html';
        }
    }
}