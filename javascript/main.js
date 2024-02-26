let selectedProducts = [];

// Carga los productos desde la API al cargar la página
function loadProducts() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            const products = response.data.slice(0, 6); // Limita a 6 productos
            let productList = document.getElementById('productList');
            productList.innerHTML = ''; // Limpia el mensaje "Cargando..."

            // Añade cada producto al DOM a travez de un for
            products.forEach(product => {
                productList.innerHTML += `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description}</p>
                                <button onclick="selectProduct('${product.title}')" class="btn btn-primary">Seleccionar</button>
                            </div>
                        </div>
                    `;
            
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
            productList.innerHTML = 'Error al cargar los productos.';
        });
}

// Función para manejar la selección de productos
function selectProduct(productName) {
    if(selectedProducts.length >= 6) {
        alert('Ya has seleccionado 6 productos');
        return;
    }
    selectedProducts.push(productName);
    Swal.fire({
        title: 'Producto Seleccionado',
        text: productName,
        icon: 'success'
    });
}

window.onload = loadProducts; // Carga productos al iniciar la página
