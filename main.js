function consultarYAlmacenar() {  // Función para consultar y almacenar un valor
    alert('Bienvenido a las flipantes aventuras de liry');
    let confirmacion = confirm("¿Quieres comenzar con el demo del juego?");

    if (confirmacion = true) {
        comienzoDelJuego();
    } else {
        alert('Fin del juego, comenzara nuevamente');
    }
}

function comienzoDelJuego() {
    let nombreIngresado = prompt('Para comenzar ingresa tu nombre:');
    while (nombreIngresado === null || nombreIngresado.trim() === '') { // Validar que el nombre no esté vacío
        alert('Por favor, ingresa un nombre válido.');
        nombreIngresado = prompt('Para comenzar ingresa tu nombre:');
    }

    alert(`${nombreIngresado}, para continuar tendrás que decirme tu estatus con 3 valores que te preguntaremos a continuación.`);
    
    const datosJugador = [nombreIngresado];
    console.log( datosJugador[0] );

    let valorVida = prompt('¿Cuánta vida (o hp) quieres que tenga tu personaje?');
    while (valorVida === null || isNaN(valorVida) || !(valorVida >= 0 && valorVida < 11)) {
        alert('Por favor, ingresa un número válido entre 0 y 11.');
        valorVida = prompt('¿Cuánta vida (o hp) quieres que tenga tu personaje?');
    }

    let valorFuerza = prompt('¿Cuánta fuerza o ataque quieres que tenga tu personaje?');
    while (valorFuerza === null || isNaN(valorFuerza) || !(valorFuerza >= 0 && valorFuerza < 11)) {
        alert('Por favor, ingresa un número válido entre 0 y 11.');
        valorFuerza = prompt('¿Cuánta fuerza o ataque quieres que tenga tu personaje?');
    }

    let valorMagia = prompt('¿Cuánta magia quieres que tenga tu personaje?');
    while (valorMagia === null || isNaN(valorMagia) || !(valorMagia >= 0 && valorMagia < 11)) {
        alert('Por favor, ingresa un número válido entre 0 y 11.');
        valorMagia = prompt('¿Cuánta magia quieres que tenga tu personaje?');
    }


/*
     datosJugador.push('valorVida', 'valorFuerza', 'valorMagia');
console.log(datosJugador);

    alert('Tus status son:');


    //alert(`Vida: ${valorVida} Fuerza o ataque: ${valorFuerza}`);

    if (nombreIngresado !== null) { // Resto del código (almacenamiento local, etc.)
        localStorage.setItem('miValor', nombreIngresado);
        console.log(`Valor almacenado con éxito: ${nombreIngresado}`);
        console.log(`Valor almacenado con éxito: ${valorVida}`);
        console.log(`Valor almacenado con éxito: ${valorFuerza}`);
    } else {
        console.log('No se ingresó ningún valor.');
    }  */
}


// Llamar a la función para probar
consultarYAlmacenar();