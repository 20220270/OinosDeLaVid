const FOOTERP = document.querySelector('footer');

FOOTERP.innerHTML = `
<div class="container-fluid bg-dark text-light">
    
            <div class="container-fluid bg-dark text-light">
            <div class="mt-3">
                <br>
                <h3 class="text-center">Oinos de la Vid</h3>
                <p class="text-center">
                No olvides recomendar nuestra tienda en línea ¡a todos!
                </p>

                <hr>
            </div>

            <div class="row justify-content-around text-center text-md-start">
                <div class="col-md-2 text-center">

                    <img src="../../resources/Imagenes/logoBlanco.png" alt="logo" id="imagenLL" height="300px" width="300px">
                    <h6>
                    Avenida Aguilares 218 San Salvador CP, San Salvador 1101
                    </h6>
                </div>

                <div class="col-md-3">

                    <ul class="list-unstyled">
                        <li class="fw-bold my-2">Redes sociales:</li>
                        <li><a href="#" class="text-decoration-none text-white">
                                <img src="../../resources/Imagenes/LogoTwiiter.png" alt="" id="LogoTwiiter" height="50px" width="50px">
                                <img src="../../resources/Imagenes/LogoInsta.png" alt="" id="LogoTwiiter" height="50px" width="50px">
                            </a>
                        </li>
                        <br>
                        <br>
                        ¡Síguenos para mantenerte informado sobre nuestros productos!
                    </ul>
                </div>

                <div class="col-md-2">
                    <ul class="list-unstyled">
                        <li class="fw-bold my-2">O contacta nuestros teléfonos:</li>
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

            </div>
            <hr>
            <div class="row">
                <div class="col-md-12 text-center pt-2">
                    <p>&copy; 2024 Copyright <a href="#" class="text-white">Oinos de la vid</a></p>
                </div>
            </div>
    
        </div>
`;