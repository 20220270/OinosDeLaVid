function login() {
    var user, pass;

    user = document.getElementById("textoAlias").value;
    pass = document.getElementById("textoContra").value;

    if (user == "Enrique" && pass == "12345") {
        console.log(location.href)
        alert('Datos correctos');
        location.href = 'index.html';
    } else {
        alert("Datos Incorrectos");
    }
}

document.getElementById("btnIngresar").addEventListener("click", function () {
    window.location.href = "index.html";
});