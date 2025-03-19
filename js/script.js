const formulario = document.querySelector('form');
// se crea el evento
formulario.addEventListener("submit", recogerFormulario);
    function recogerFormulario(evento) {
        //evita que se envie el formulario sin datos o incompleto aunque en el html ya se ha puesto por lo que no es necesario
        evento.preventDefault();

        //declaramos las variables
        const nombre = document.getElementById('nombre').value;
        const concierto = document.getElementById('concierto').value;
        const fecha = document.getElementById('fecha').value;
        const cantidad = document.getElementById('cantidad').value;
        const categoria = document.getElementById('categoria').value;
        //usamos querySelector para seleccionar el valor del input radio que ha sido seleccionado
        const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value;
        const terminos = document.getElementById('terminos').checked;

        //console logs para comprobar que se han recogido los datos
        console.log("Datos del formulario:");
        console.log("Nombre:", nombre);
        console.log("Concierto:", concierto);
        console.log("Fecha:", fecha);
        console.log("Cantidad:", cantidad);
        console.log("Categoría:", categoria);
        console.log("Método de Pago:", metodoPago);
        console.log("Términos aceptados:", terminos);
    }

