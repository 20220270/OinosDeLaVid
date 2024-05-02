//Funcion para dirigirse a un apartado desde el navbar

function scrollToElement(id) {
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth"});
}

const NAVBAR = document.querySelector('nav');

NAVBAR.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="login.html">
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
                            <a class="nav-link" href="index.html#footer" onclick="scrollToElement('footer')">Contactos</a>
                        </li>
                        <li class="nav-item" id="Contac">
                            <a class="nav-link" href="miscompras.html">Ver mis compras</a>
                        </li>
                        <li class="nav-item" id="ses">
                            <a class="nav-link" href="login.html">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>

                <button class="btn" type="submit" id="btnVerPerfil">IvanSalgue</button>

                <div class="botonCar">
                    <img src="../../resources/Imagenes/carrito.png" alt="" width="25 px" height="25 px"
                        id="imagenCarrito">
                    <button class="btn" type="submit" id="botonCarrito">

                        <h6 class="mt-1" id="textoCar">Ver carrito</h6>

                    </button>
                </div>

            </div>
        </nav>

`;
