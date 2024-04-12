/*Declaracion y obtencion de variables del inicio privado*/
function login() {
    var user, pass;

    user = document.getElementById("textoAlias").value;
    pass = document.getElementById("textoContra").value;

    if (user == "Enrique" && pass == "12345") {
        console.log(location.href)
        alert('Datos correctos');
        location.href = 'menu.html';
    } else {
        alert("Datos Incorrectos");
    }
}


