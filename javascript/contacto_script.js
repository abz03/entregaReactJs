//Script mostrado en entrega anterior y adaptado a la de ahora.

    // Función para validar que el nombre no esté vacío
    function validarNombre(nombre) {
        // Verifica si el nombre no está vacío, si no cumple con ello pasa directo al while
        while (nombre.trim() === '') {
            alert('Por favor, ingrese un nombre.'); // Genera una alerta si no cumple con la validación.
            nombre = prompt('Ingrese un nombre:'); // le pide al usuario amablemente sin utilizar la violencia que ingrese su nombre, lo mismo ocurrira con su telefono correo y comentario.
        }
        return nombre;
    }
    
    // Función para validar que el teléfono no esté vacío y sea un número
    function validarTelefono(telefono) {
        // Verifica si el teléfono no está vacío y es un número, si no cumple con ello pasa directo al while
        while (telefono.trim() === '' || isNaN(telefono)) {
            alert('Por favor, ingrese un teléfono válido.'); // Genera una alerta si no cumple con la validación.
            telefono = prompt('Ingrese un teléfono:'); 
        }
        return telefono;
    }
    
    // Función creada para validar el correo en base a un patron establecido con regEXP que es uma expresion regular
    function validarCorreo(correo) {
        // la primera parte del patron establece que puede ser una letra de la "a-z" y un numero,la segunda lo obliga a que parta con un @ repitiedo el patron del primero y la siguiente parte hace lo mismo que el segundo, pero debe partir con un punto.
        var regEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // El patron del correo electronico lo robe de un foro donde habia alguien mas preguntando lo mismo, me estaba mandando un gran codigo feo y me tope con esa maravilla.
    
        // Verifica si el correo es válido en base al patrón, si no cumple con ello pasa directo al while
        while (!regEXP.test(correo)) {
            alert('Por favor, ingrese un correo electrónico válido.'); // Genera una alerta si no cumple con la validación.
            correo = prompt('Ingrese un correo electrónico:');
        }
        return correo;
    }
    
    // Función para validar que el comentario no esté vacío
    function validarComentario(comentario) {
        // Verifica si el comentario no está vacío, si no cumple con ello pasa directo al while
        while (comentario.trim() === '') {
            alert('Por favor, ingrese un comentario.'); // Genera una alerta si no cumple con la validación.
            comentario = prompt('Ingrese un comentario:'); 
        }
        return comentario;
    }
    
    // Aqui recien comienza la magia, las funciones anteriores seran utilizadas más abajo
    function validarFormulario() {
        // Se obtienen los valores solicitados en base al Id del elemento del HTML
        let nombre = document.getElementById('nombre').value;
        let telefono = document.getElementById('telefono').value;
        let correo = document.getElementById('correo').value;
        let comentario = document.getElementById('comentario').value;
    
        // Se ejecutan las funciones anteriormente mencionadas de validar nombre, teléfono, correo y comentario usando los while
        nombre = validarNombre(nombre);
        telefono = validarTelefono(telefono);
        correo = validarCorreo(correo);
        comentario = validarComentario(comentario);
    
        // Guardando los valores en el local storage por si acaso (robar numeros y venderlos a los indues)
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('correo', correo);
        localStorage.setItem('comentario', comentario);
    
       // Mostrar los datos en la consola (como que el console.log no es debug?)
        console.log('Nombre: ' + nombre);
        console.log('Teléfono: ' + telefono);
        console.log('Correo: ' + correo);
        console.log('Comentario: ' + comentario);
    
        // Mostrar los valores ingresados en un alert very UX
        alert('Sus datos son:\nNombre: ' + nombre + '\nTeléfono: ' + telefono + '\nCorreo: ' + correo + '\nLo Contactaremos pronto, muchas gracias por escribirnos');
        // No agregue el comentario ya que nos es data tan relevante pra el cliente y puede ser largo, siendo poco estetico "imprimir" el valor
    
        // Para evitar el envío del formulario y poder visualizar los datos en la consola ya que no lo mando a una api porque no tengo un servidor, aws esta muy caro.
        return false;
    }
    