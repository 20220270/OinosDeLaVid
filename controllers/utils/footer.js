const FOOTER = document.querySelector('footer');
FOOTER.innerHTML = `
            <div class="container-fluid bg-dark text-light">
                <div class="mt-3">
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

`;