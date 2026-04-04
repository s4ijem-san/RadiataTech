const formulario = document.getElementById("formPredial");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;

const mensaje = document.getElementById("mensajePredial");

mensaje.textContent = `Gracias por contratar nuestros servicios ${nombre}. Hemos recibido la información de tu predio.
Se enviará un correo a ${email} con el costo de la revisión y luego de cancelado se enviarán los resultado de la revisión.`

formulario.reset();

});

const formFSC = document.getElementById("formFSC");

formFSC.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombreFSC").value;
    const mensaje = document.getElementById("mensajeFSC");

    mensaje.textContent = 
    `Gracias ${nombre}, te contactaremos explicandote en que consiste el servicio de trazabilidad mensual o para ver si estas interesado en la certificación FSC`;

    formFSC.reset();
});

const formDrone =document.getElementById("formDrone");

formDrone.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombreDrone").value;

    const mensaje = document.getElementById("mensajeDrone");

    mensaje.textContent = `Gracias ${nombre}, hemos recibido tu solicitud para que te realicemos un vuelo de drone. Nos contactaremos contigo en la brevedad posible para coordinar todo.`

    formDrone.reset();
});