const HEADER = document.querySelector('nav');
HEADER.innerHTML = `
<nav class="navbar navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="menu.html">
                <img src="../../resources/Imagenes/logo.png" alt="" width="90 px" height="90 px"
                    class="d-inline-block ">
            </a>
            <div class="txtAdmin">
                <h6>Admin</h6>
            </div>
        </div>
    </nav>
<div class="container col1">
            <div class="row row-cols-2 row-cols-lg-3">

            <div class="col-2 col-lg-3 col-md-1 col-sm-2" id="btnCerrarCe">
            <button type="button" class="btn btn-dark">
                <img src="../../resources/Imagenes/cerrarS.png" id="imagenC" alt="" height="20px" width="20px">
                Cerrar sesión</button>
        </div>

                <div class="col-2 col-lg-2 col-md-2 col-sm-2" id="btnProductos">
                    <button type="button" class="btn btn-dark">Productos</button>
                </div>

                <div class="col-2 col-lg-2 col-md-2 col-sm-2" id="btnCatego">
                    <button type="button" class="btn btn-dark">Categorias</button>
                </div>
                <div class="col-1 col-lg-2 col-md-2 col-sm-1" id="btnMarcas">
                    <button type="button" class="btn btn-dark">Marcas</button>
                </div>
                <div class="col-1 col-lg-2 col-md-2 col-sm-2" id="btnClientes">
                    <button type="button" class="btn btn-dark">Clientes</button>
                </div>
                <div class="col-2 col-lg-1 col-md-1" id="btnAdmins">
                    <button type="button" class="btn btn-dark">Administradores</button>
                </div>

            </div>
        </div>
`;
