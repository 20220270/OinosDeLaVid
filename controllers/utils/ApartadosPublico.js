const HEADER = document.querySelector('nav');
HEADER.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="menu.html">
            <img src="../../resources/Imagenes/logo.png" alt="" width="200 px" height="200 px" class="d-inline-block">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" id="menu">
                    <a class="nav-link active" aria-current="page" href="#">Menú</a>
                </li>
                <li class="nav-item" id="nos">
                    <a class="nav-link" href="#">Sobre nosotros</a>
                </li>
                <li class="nav-item" id="carrito">
                    <a class="nav-link" href="#">Ver carrito</a>
                </li>
                <li class="nav-item" id="Contac">
                    <a class="nav-link" href="#">Contactos</a>
                </li>
                <li class="nav-item" id="ses">
                    <a class="nav-link" href="#">Cerrar sesión</a>
                </li>
            </ul>
        </div>
        <button class="btn" type="submit">ivanSalgue</button>
    </div>
</nav>
`;
