// Se obtiene el formulario prinicpal de revisión predial
const formulario = document.getElementById("formPredial");
// Evento al enviar el formulario
formulario.addEventListener("submit", function(event){
//el preventDefault evita recargar la página (comportamiento por defecto de un formulario)
    e.preventDefault();

//captura los datos ingresados
const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
// Elemento donde se mostrará el mensaje
const mensaje = document.getElementById("mensajePredial");
//Mensaje que se muestra al usuario
mensaje.textContent = `Gracias por contratar nuestros servicios ${nombre}. Hemos recibido la información de tu predio.
Se enviará un correo a ${email} con el costo de la revisión y luego de cancelado se enviarán los resultado de la revisión.`

//Limpia el formulario después de enviar
formulario.reset();

});

// Esto obtiene el formulario de trazabilidad/fsc
const formFSC = document.getElementById("formFSC");
//evento submit
formFSC.addEventListener("submit", function (e) {
//evita recargar la página (comportamiento por defecto de un formulario)
    e.preventDefault();
    // Captura el nombre
    const nombre = document.getElementById("nombreFSC").value;
    // Elemento mensaje
    const mensaje = document.getElementById("mensajeFSC");
    // Mensaje de confirmación que será contactado
    mensaje.textContent = 
    `Gracias ${nombre}, te contactaremos explicandote en que consiste el servicio de trazabilidad mensual o para ver si estas interesado en la certificación FSC`;
// Limpia el formulario después de enviar
    formFSC.reset();
});

// Esto obtiene el formulario de drones
const formDrone =document.getElementById("formDrone");
// Evento submit
formDrone.addEventListener("submit", function(e){
  //evita recargar  
    e.preventDefault();
// captura el nombre
    const nombre = document.getElementById("nombreDrone").value;
// elemento msj
    const mensaje = document.getElementById("mensajeDrone");
// Mensaje de respuesta al usuario
    mensaje.textContent = `Gracias ${nombre}, hemos recibido tu solicitud para que te realicemos un vuelo de drone. Nos contactaremos contigo en la brevedad posible para coordinar todo.`
// limpia el formulario después de enviar
    formDrone.reset();
});