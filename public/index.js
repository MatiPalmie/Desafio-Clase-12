const socket = io();

const lista = document.getElementById("listaProductos");

function newProduct (e) {
}

function render(list){
const html = list.map((e) => {
    return `
    <ul class="d-flex justify-content-evenly" style="list-style:none;">
            <li class="">${e.nombre}</li>
            <li class="">$ ${e.precio}</li>
            <img src="${e.foto}" alt="${e.nombre}" class="img-thumbnail">
            </ul>
            `
        }).join (" ");
        document.getElementById("listaProductos").innerHTML = html;
}
        socket.on('productList', list =>{
            render(list)

})