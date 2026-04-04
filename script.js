const formulario = document.getElementById("formPredial");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;

const mensaje = document.getElementById("mensajePredial");

mensaje.textContent = "Gracias por contratar nuestros servicios " + nombre + ". Hemos recibido la información de tu predio."
+ "Se enviará un correo a " + email + " con el costo de la revisión y luego de cancelado se enviarán los resultado de la revisión."

formulario.reset();

});