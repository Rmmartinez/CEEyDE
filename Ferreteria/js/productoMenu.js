const productoC = document.getElementById('productos')
const filtrar = document.getElementById('list-timezone')

var dataList = document.querySelector('#list-timezone'),
    input = document.querySelector('#busqueda');

var misProductos = [];
let todosLosProductos = []
const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
    first.toLocaleUpperCase(locale) + rest.join('')

var nombres = [];
var nombres2 = [];

var productosFiltrados = [];

// let presupuesto = [];
// suma = 0; 

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('busqueda');


function traerProductos() {
    fetch("http://localhost:3000/productos")
        .then(response => response.json())
        .then(productos => {
            todosLosProductos = productos;
            nombres = productos;
            mostrarDatos(todosLosProductos)
            todosLosProductos.forEach(function (item) {
                // Creando un option por cada producto
                var option = document.createElement('option');
                option.value = item.nombre;
                dataList.appendChild(option);
            });
            
            searchButton.addEventListener('click', () => {
            //const inputValue = searchInput.value;
            buscarProducto(searchInput.value)
            });
            
        })

}

traerProductos();

function mostrarDatos(arr) {
    productoC.innerHTML = ""
    const card_productos = document.createElement("div")
    for (let i = 0; i < arr.length; i = i + 3) {

        if (i < arr.length - 2) {
            //alert("if 1"+arr[i].nombre)
            card_productos.innerHTML +=
                `
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100" id="prueba">
                <img src='${arr[i].imagen}' class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${capitalizeFirstLetter(arr[i].nombre)}</h5>
                    <p>${capitalizeFirstLetter(arr[i].cod_producto)}</p>
                    <p class="card-text">
                    <b>Precio: $</b> <a style="color: #347637;">${capitalizeFirstLetter(arr[i].precio_venta)}</a>
                </p>
                </div>
                <div class="card-footer" style="background-color: white;">
                        <small class="text-muted"><button class="btn btn-sm d-block mx-auto" id="botonprueba"
                            style="background-color: #B83232; color: white;">Añadir al
                            presupuesto</button></small>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src='${(arr[i + 1].imagen)}' "class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${capitalizeFirstLetter(arr[i + 1].nombre)}</h5>
                    <p>${capitalizeFirstLetter(arr[i+1].cod_producto)}</p>
                    <p class="card-text">
                    <b>Precio: $</b> <a style="color: #347637;">${capitalizeFirstLetter(arr[i + 1].precio_venta)}</a>
                </p>
                </div>
                <div class="card-footer" style="background-color: white;">
                        <small class="text-muted"><button class="btn btn-sm d-block mx-auto" 
                            style="background-color: #B83232; color: white;">Añadir al
                            presupuesto</button></small>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src='${(arr[i + 2].imagen)}' class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${capitalizeFirstLetter(arr[i + 2].nombre)}</h5>
                    <p>${capitalizeFirstLetter(arr[i+2].cod_producto)}</p>
                    <p class="card-text">
                    <b>Precio: $</b> <a style="color: #347637;">${capitalizeFirstLetter(arr[i + 2].precio_venta)}</a>
                </p>
                </div>
                <div class="card-footer" style="background-color: white;">
                        <small class="text-muted"><button class="btn btn-sm d-block mx-auto" 
                            style="background-color: #B83232; color: white;">Añadir al
                            presupuesto</button></small>
                        </div>
                </div>
            </div>
            </div>

            <br>
            `
            productoC.appendChild(card_productos)
        } else {
            if (i < arr.length - 1) {
                //alert("if 2"+arr[i].nombre)
                card_productos.innerHTML +=
                    `
                <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src='${arr[i].imagen}' class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${capitalizeFirstLetter(arr[i].nombre)}</h5>
                        <p>${capitalizeFirstLetter(arr[i].cod_producto)}</p>
                        <p class="card-text">
                        <b>Precio: $</b> <a style="color: #347637;">${capitalizeFirstLetter(arr[i].precio_venta)}</a>
                    </p>
                    </div>
                    <div class="card-footer" style="background-color: white;">
                            <small class="text-muted"><button class="btn btn-sm d-block mx-auto" 
                                style="background-color: #B83232; color: white;">Añadir al
                                presupuesto</button></small>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src='${(arr[i + 1].imagen)}' "class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${capitalizeFirstLetter(arr[i + 1].nombre)}</h5>
                        <p>${capitalizeFirstLetter(arr[i+1].cod_producto)}</p>
                        <p class="card-text">
                        <b>Precio: $</b> <a style="color: #347637;">${capitalizeFirstLetter(arr[i + 1].precio_venta)}</a>
                    </p>
                    </div>
                    <div class="card-footer" style="background-color: white;">
                            <small class="text-muted"><button class="btn btn-sm d-block mx-auto"
                                style="background-color: #B83232; color: white;">Añadir al
                                presupuesto</button></small>
                            </div>
                    </div>
                </div>
                
            </div>
    
                <br>
                `
                productoC.appendChild(card_productos)

            }else{
                //alert("if 3"+arr[i].nombre)
                card_productos.innerHTML +=
                    `
                <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src='${arr[i].imagen}' class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${capitalizeFirstLetter(arr[i].nombre)}</h5>
                        <p>${capitalizeFirstLetter(arr[i].cod_producto)}</p>
                        <p class="card-text">
                        <b>Precio: $</b> <a style="color: #347637;">${capitalizeFirstLetter(arr[i].precio_venta)}</a>
                    </p>
                    </div>
                    <div class="card-footer" style="background-color: white;">
                            <small class="text-muted"><button class="btn btn-sm d-block mx-auto" 
                                style="background-color: #B83232; color: white;">Añadir al
                                presupuesto</button></small>
                            </div>
                    </div>
                </div>
                </div>
    
                <br>
                `
                productoC.appendChild(card_productos)
            }

        }

    }

productosFiltrados = []
}

function buscarProducto(prod){
    
    for(let i=0; i< nombres.length; i++){
        
        if(nombres[i].nombre.includes(prod)){
            //productosFiltrados[i] = nombres[i];
            productosFiltrados.push(nombres[i]);
            //alert("productoFiltrados tiene "+productosFiltrados)
        }
    }
 
    mostrarDatos(productosFiltrados)
}

/////////////////////////////////////////////////

//   function addPresupuesto (titulo,codigo,precio){
//     let producto = [];
//     producto[0] = " Producto: "+titulo;
//     producto[1] = "<br>"+" Precio: "+codigo;
//     producto[2] = "<br>"+" Codigo: "+precio+"<br>";
//     presupuesto.push(producto);
//     suma+=parseFloat(precio);
//     alert("Suma: "+suma);
//     alert("Producto agregado al presupuesto");
//     const itemTabla= document.getElementById("mostrar");
//     itemTabla.innerHTML = "";
//     const itemCreador= document.createElement("div");

//     const itemPrecio= document.getElementById("precio1");
    
//     for(let i=0; i<presupuesto.length;i++){
//       itemCreador.innerHTML+=
//       `
//         <p>
//           ${presupuesto[i]}
//         </p>
//         <br/>
//       `
//       itemTabla.appendChild(itemCreador);
//     }

//     itemPrecio.innerHTML = "";
//     const itemCreadorPrecio= document.createElement("div");
//     itemPrecio.innerHTML +=
//     `
//     <p><b>  Total: $</b> <a style="color: #347637;">${suma}</a></p>
//                         <p>  *Precio válido por una semana.</p>
    
//     `
//     itemPrecio.appendChild(itemCreadorPrecio);
    
//   }
