const ALERT = document.querySelector('#alerts');

ALERT.innerHTML = `

<!--Modal para mostrar la inserción de un registro-->
<div class="modal" id="miModalR" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <!-- Contenido de la ventana modal -->
            <div class="modal-body text-center"> <!-- Agregamos la clase text-center para centrar el contenido -->
                <form id="saveForm">
                    <div class="d-flex justify-content-center align-items-center flex-column"> <!-- Agregamos clases para centrar vertical y horizontalmente -->
                        <img src="../../resources/Imagenes/exito.png" alt="">
                        <br>
                        <h4 class="text-align-center">¡Registro realizado con éxito!</h4>
                        <br>
                        <h6 class="text-align-center">Se ha realizado un nuevo registro.</h6>
                    </div>
                    <div class="modal-footer d-flex justify-content-center"> <!-- Agregamos clases para centrar horizontalmente -->
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal"
                        id="btnCerrar">Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!--Primera Modal para mostrar la eliminación de un registro-->
<div class="modal" id="miModalDe" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <!-- Contenido de la ventana modal -->
            <div class="modal-body text-center"> <!-- Agregamos la clase text-center para centrar el contenido -->
                <form id="saveForm">
                    <div class="d-flex justify-content-center align-items-center flex-column"> <!-- Agregamos clases para centrar vertical y horizontalmente -->
                        <img src="../../resources/Imagenes/pregunta.png" alt="">
                        <br>
                        <h4 class="text-align-center">¿Desea realmente eliminar este dato?</h4>
                        <br>
                        <h6 class="text-align-center">Se eliminará el dato para siempre.</h6>
                    </div>
                    <div class="modal-footer d-flex justify-content-center"> <!-- Agregamos clases para centrar horizontalmente -->
                        <button type="button" class="btn btn-dark" id="btnElimin">Eliminar</button>
                        <button type="button" class="btn btn-dark btn-block" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button> <!-- Agregamos clase btn-block para ajustar el ancho -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!--Segunda Modal para mostrar la eliminación de un registro-->
<div class="modal" id="miModalDe2" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <!-- Contenido de la ventana modal -->
            <div class="modal-body text-center"> <!-- Agregamos la clase text-center para centrar el contenido -->
                <form id="saveForm">
                    <div class="d-flex justify-content-center align-items-center flex-column"> <!-- Agregamos clases para centrar vertical y horizontalmente -->
                        <img src="../../resources/Imagenes/exito.png" alt="">
                        <br>
                        <h4 class="text-align-center">¡Registro eliminado con éxito!</h4>
                        <br>
                        <h6 class="text-align-center">Se ha eliminado un registro.</h6>
                    </div>
                    <div class="modal-footer d-flex justify-content-center"> <!-- Agregamos clases para centrar horizontalmente -->
                        <button type="submit" class="btn btn-dark btn-block" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button> <!-- Agregamos clase btn-block para ajustar el ancho -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<!--Primera Modal para mostrar la actualización de un registro-->
<div class="modal" id="miModalAC" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <!-- Contenido de la ventana modal -->
            <div class="modal-body text-center"> <!-- Agregamos la clase text-center para centrar el contenido -->
                <form id="saveForm">
                    <div class="d-flex justify-content-center align-items-center flex-column"> <!-- Agregamos clases para centrar vertical y horizontalmente -->
                        <img src="../../resources/Imagenes/exito.png" alt="">
                        <br>
                        <h4 class="text-align-center">¡Registro actualizado con éxito!</h4>
                        <br>
                        <h6 class="text-align-center">Se ha actualizado un registro.</h6>
                    </div>
                    <div class="modal-footer d-flex justify-content-center"> <!-- Agregamos clases para centrar horizontalmente -->
                        <button type="submit" class="btn btn-dark btn-block" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button> <!-- Agregamos clase btn-block para ajustar el ancho -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!--este codigo no aplica en la vista de categoria-->

<!-- Segunda Modal para mostrar la actualización de un registro-->
<div class="modal" id="miModalACCon" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <!-- Contenido de la ventana modal -->
            <div class="modal-body text-center"> <!-- Agregamos la clase text-center para centrar el contenido -->
                <form id="saveForm">
                    <div class="d-flex justify-content-center align-items-center flex-column"> <!-- Agregamos clases para centrar vertical y horizontalmente -->
                        <img src="../../resources/Imagenes/exito.png" alt="">
                        <br>
                        <h4 class="text-align-center">¡Contraseña actualizada con éxito!</h4>
                        <br>
                        <h6 class="text-align-center">Se ha actualizado la contraseña.</h6>
                    </div>
                    <div class="modal-footer d-flex justify-content-center"> <!-- Agregamos clases para centrar horizontalmente -->
                        <button type="submit" class="btn btn-dark btn-block" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button> <!-- Agregamos clase btn-block para ajustar el ancho -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`;