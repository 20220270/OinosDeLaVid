const HEADER = document.querySelector('nav');
HEADER.innerHTML = `

<nav class="navbar navbar-expand-lg fixed-top navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Cerrar sesion</a>
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
                        <a class="nav-link active" aria-current="page" href="perfil.html">Mi perfil</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
`;
