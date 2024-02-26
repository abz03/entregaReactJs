let selectedProducts = [];

// Funcion para cargar productos desde la API al cargar la página
function loadProducts() {
    // Uso de fetch para obtener nombres de la API de pokemon
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json()) // Convertir la respuesta en JSON
        .then(data => {
            const pokemons = data.results.slice(0, 6); // Limitar a 6 pokemon
            let productList = document.getElementById('productList'); // Asegurarse de que este ID exista en tu HTML (si no existe da error y se ve en el html)

            productList.innerHTML = ''; // limpia el mensaje "cargando" que esta en index de forma predeterminada

            // añadiendo cada pokemon al DOM atrapalos cha
            pokemons.forEach(pokemon => {
                // Solicitar detalles adicionales para cada pokemon
                fetch(pokemon.url)
                    .then(response => response.json()) //obtiene la respusta del json de la pagina
                    .then(pokemonDetails => {          //inicia una funcion que se ejecutara una vez que se haya completado la solicitud fetch para obtener los detalles de un pokemon especifico. "pokemonDetails" es un objeto que contiene la respuesta de esta solicitud, que incluye todos los datos detallados del pokemon. es mas facil que agregar botones que consulten pokemon por pokemon, un trucazo
                        const pokemonImage = pokemonDetails.sprites.front_default; // obtiene las imagenes desde la siguiente "url" (front_default) usando la propiedad "sprites" y las guarda en la constante.
                        
                        //se utilizara para agregar los elementos al body de index.html y desplegar 6 "recruadros" que traeran la informacion relacionada a cada pokemon
                        productList.innerHTML += `  
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img src="${pokemonImage}" class="card-img-top product-image" alt="${pokemon.name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${pokemon.name}</h5>
                                        <button onclick="selectProduct('${pokemon.name}')" class="btn btn-primary">Seleccionar</button>
                                    </div>
                                </div>
                            </div>
                        `;
                    })
            });
        })
        .catch(error => {            // si falla cargar la informacion de la api, se muestra lo siguiente.
            console.error('Error al cargar los Pokémon:', error);
            productList.innerHTML = 'Error al cargar los Pokémon.';
        });
}

// Función para manejar la selección de Pokémon
function selectProduct(pokemonName) {
    if (selectedProducts.length >= 2) {
        alert('Ya has seleccionado 2 Pokemon, deja para los demas');
        return;
    }
    selectedProducts.push(pokemonName);
    Swal.fire({
        title: 'Pokemon Seleccionado',
        text: pokemonName,
        icon: 'success'
    });
}

window.onload = loadProducts; // Carga Pokémon al iniciar la página
