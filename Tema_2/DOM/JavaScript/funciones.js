// Búsqueda de elementos
function buscarPorId() {
    const resultado = document.getElementById("resultado-busqueda");
    resultado.textContent = "Elemento encontrado por ID: " + document.getElementById("busqueda-elementos").tagName;
}

function buscarPorClase() {
    const elementos = document.getElementsByClassName("caja");
    document.getElementById("resultado-busqueda").textContent = `Elementos encontrados por clase: ${elementos.length}`;
}

function buscarPorEtiqueta() {
    const elementos = document.getElementsByTagName("div");
    document.getElementById("resultado-busqueda").textContent = `Elementos encontrados por etiqueta: ${elementos.length}`;
}

function buscarPorSelector() {
    const elemento = document.querySelector("#elemento-manipular");
    document.getElementById("resultado-busqueda").textContent = "Elemento encontrado por selector: " + elemento.tagName;
}

// Manipulación de clases
function alternarClase() {
    const elemento = document.getElementById("elemento-manipular");
    elemento.classList.toggle("alternada");
}

function añadirClase() {
    const elemento = document.getElementById("elemento-manipular");
    elemento.classList.add("nueva-clase");
    document.getElementById("resultado-busqueda").textContent = "Clase añadida: nueva-clase";
}

function eliminarClase() {
    const elemento = document.getElementById("elemento-manipular");
    elemento.classList.remove("nueva-clase");
    document.getElementById("resultado-busqueda").textContent = "Clase eliminada: nueva-clase";
}
