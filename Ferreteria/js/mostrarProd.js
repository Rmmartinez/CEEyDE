const itemTabla= document.getElementById("productoU");
const itemCreador= document.createElement("table");
//const btnModificar= document.getElementById("modificarP");
// btnModificar.className= 'btn';
// btnModificar.addClass('btn-outline-warning');
// btnModificar.setAttribute('href','modificarProducto.html');
// btnModificar.setAttribute('role','button');

// const campoNomP= document.getElementById("prodNombre");
// const campoCodP= document.getElementById("prodCod");
// const campoPrecioP= document.getElementById("precio");
// const campoCantidadP= document.getElementById("cantidad");
// const campoDescP= document.getElementById("descripcion");

let guardoProductos=[]
let tokenArr;
const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
    first.toLocaleUpperCase(locale) + rest.join('')
function traerProductos() {
    fetch("http://localhost:3000/productos")
        .then(response => response.json())
        .then(productos => {
            mostrarDatos(productos);
            
            // btnModificar.addEventListener('click', () => {
            //     localStorage.setItem("Token",tokenArr);
            // });
        })

}
traerProductos();
function mostrarDatos(arr) {
    itemTabla.innerHTML = "";
    
    itemCreador.className= 'table';
    itemCreador.innerHTML+=
    `
    
    <thead>
        <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Stock</th>
        <th scope="col">Descripción</th>
        <th scope="col">Proveedor</th>
        <th colspan="2" scope="col"><a class="btn btn-success" href="cargoProductos.html" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg> Nuevo Producto</a></th>
        </tr>
    </thead>
    
    `
    for(let i=0; i<arr.length;i++){

        itemCreador.innerHTML+=
        `
        <tr>
            <th scope="row">${arr[i].cod_producto}</th>
            <td>${arr[i].nombre}</td>
            <td>${arr[i].precio_venta}</td>
            <td>${arr[i].stockactual}</td>
            <td>${arr[i].descripcion}</td>
            <td>${arr[i].proveedor}</td>
            <td>  
                <a class="btn btn-outline-warning"  role="button" href="modificarProducto.html" onclick= "obtenerDatos('${arr[i].nombre}','${arr[i].cod_producto}','${arr[i].precio_venta}','${arr[i].stockactual}','${arr[i].descripcion}','${arr[i].proveedor}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                     </svg>
                </a>
                
            </td>
            <td><a class="btn btn-outline-danger" href="#" data-toggle="modal" data-target="#deleteModal" role="button" onclick= "eliminarDatos('${arr[i].cod_producto}')"><svg xmlns="http://www.w3.org/2000/svg" width="16"
            height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg></a></td>
        </tr>
        `
        //tokenArr= arr[i];
    }
    itemTabla.appendChild(itemCreador);
    
    
}


///Eliminacion del producto
const eliminarDatos = (id)=>{

    localStorage.setItem("Codigo",codigo);
    
}

