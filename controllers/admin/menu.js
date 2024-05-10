
 // Obtener la fecha y hora actual
 function addZero(num) {
  return (num < 10 ? '0' : '') + num;
}

// Función para actualizar la fecha y la hora cada segundo
/*function updateDateTime() {
  var today = new Date();
  var formattedDateTime = addZero('Fecha actual: ' + today.getDate()) + '/' + addZero(today.getMonth() + 1) + '/' + today.getFullYear() +
      ', ' + addZero(today.getHours()) + ':' + addZero(today.getMinutes()) + ':' + addZero(today.getSeconds());
  document.getElementById("fechaLabel").innerText = formattedDateTime;
}*/

// Llamar a la función para la primera actualización
//updateDateTime();

// Actualizar cada segundo
//setInterval(updateDateTime, 1000);



 // Insertar la fecha y la hora en el label
 //document.getElementById("fechaLabel").innerText = formattedDateTime;


//Codigo para redireccionar el perfil del administrador a la ventana anterior
localStorage.setItem('paginaOrigen', window.location.href);


