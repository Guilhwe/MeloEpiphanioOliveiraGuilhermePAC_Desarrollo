const formulario = document.querySelector('form');
// se crea el evento
formulario.addEventListener("submit", recogerFormulario);
    function recogerFormulario(evento) {
        //evita que se envie el formulario sin datos o incompleto aunque en el html ya se ha puesto por lo que no es necesario
        evento.preventDefault();

        //declaramos las variables
        const nombre = document.getElementById('nombre').value;
        const ciudad = document.getElementById('ciudad').value;
        const fecha = document.getElementById('fecha').value;
        const cantidad = document.getElementById('cantidad').value;
        const categoria = document.getElementById('categoria').value;
        //usamos querySelector para seleccionar el valor del input radio que ha sido seleccionado
        const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value;
        const terminos = document.getElementById('terminos').checked;

        if (!nombre) {
            alert("Por favor, ingresa tu nombre.");
            return; 
        }
    
        if (!ciudad) {
            alert("Por favor, selecciona una ciudad.");
            return; 
        }
    
        if (!fecha) {
            alert("Por favor, selecciona una fecha.");
            return; 
        }
    
        if (!cantidad) {
            alert("Por favor, selecciona la cantidad de entradas.");
            return; 
        }
    
        if (!categoria) {
            alert("Por favor, selecciona una categoría.");
            return; 
        }
    
        if (!metodoPago) {
            alert("Por favor, selecciona un método de pago.");
            return; 
        }
    
        if (!terminos) {
            alert("Debes aceptar los términos y condiciones.");
            return; 
        }
        
        
        //console logs para comprobar que se han recogido los datos
        console.log("Datos del formulario:");
        console.log("Nombre:", nombre);
        console.log("Ciudad:", ciudad);
        console.log("Fecha:", fecha);
        console.log("Cantidad:", cantidad);
        console.log("Categoría:", categoria);
        console.log("Método de Pago:", metodoPago);
        console.log("Términos aceptados:", terminos);

        //guardamos los datos en el localStorage pazra poder mostrarlos en la pagina de confirmacion
        sessionStorage.setItem('nombre', nombre);
        sessionStorage.setItem('ciudad', ciudad);
        sessionStorage.setItem('fecha', fecha);
        sessionStorage.setItem('cantidad', cantidad);
        sessionStorage.setItem('categoria', categoria);
        sessionStorage.setItem('metodoPago', metodoPago);

        //redirigimos a la pagina de confirmacion
        window.location.href = "confirmacion.html";

        
    }

