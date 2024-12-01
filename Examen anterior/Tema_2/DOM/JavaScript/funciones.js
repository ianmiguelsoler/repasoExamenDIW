//! Búsqueda de elementos
const buscarPorId = () => {
  const resultado = document.getElementById("resultado-busqueda");
  resultado.textContent =
    "Elemento encontrado por ID: " +
    document.getElementById("busqueda-elementos").tagName;
};

const buscarPorClase = () => {
  const elementos = document.getElementsByClassName("uwu");
  document.getElementById(
    "resultado-busqueda"
  ).textContent = `Elementos encontrados por clase: ${elementos.length}`;
};

const buscarPorEtiqueta = () => {
  const elementos = document.getElementsByTagName("div");
  document.getElementById(
    "resultado-busqueda"
  ).textContent = `Elementos encontrados por etiqueta: ${elementos.length}`;
};

const buscarPorSelector = () => {
  const elemento = document.querySelector("#elemento-manipular");
  document.getElementById("resultado-busqueda").textContent =
    "Elemento encontrado por selector: " + elemento.tagName;
};

const buscarPorSelectorTodos = () => {
  const elementos = document.querySelectorAll(".uwu");
  document.getElementById(
    "resultado-busqueda"
  ).textContent = `Elementos encontrados por querySelectorAll: ${elementos.length}`;
};

//! Manipulación de clases
const alternarClase = () => {
  const elemento = document.getElementById("elemento-manipular");
  elemento.classList.toggle("alternada"); //Al utilizar un toggle me añade o me quita la clase alternada
  document.getElementById("resultado-busqueda").textContent =
    "Cambiado el color o quitado";
};

const añadirClase = () => {
  const elemento = document.getElementById("elemento-manipular");
  elemento.classList.add("nueva-clase");
  document.getElementById("resultado-busqueda").textContent =
    "Clase añadida: nueva-clase";
};

const eliminarClase = () => {
  const elemento = document.getElementById("elemento-manipular");
  elemento.classList.remove("nueva-clase");
  document.getElementById("resultado-busqueda").textContent =
    "Clase eliminada: nueva-clase";
};

//! Remplazar el contenido en el Dom
/* Nos devuelve el nombre del nodo, que en elementos HTML es
   interesante puesto que nos devuelve el nombre de la etiqueta en mayúsculas.*/
const mostrarNodeName = () => {
  const parrafo = document.getElementById("parrafo-reemplazo");
  const nodeName = parrafo.nodeName;
  document.getElementById(
    "resultado-reemplazo"
  ).textContent = `El nodeName del elemento seleccionado es: ${nodeName}`;
};
/* Nos devuelve el contenido de texto de un elemento HTML. Es útil para
obtener o modificar sólo el texto dentro de un elemento, obviando la etiqueta HTML:*/
const reemplazarTextContent = () => {
  const parrafo = document.getElementById("parrafo-reemplazo");
  parrafo.textContent =
    "Este es el nuevo contenido usando textContent. Solo el texto cambia, no el HTML.";
  document.getElementById("resultado-reemplazo").textContent =
    "Contenido reemplazado usando textContent.";
};

/*Interpretando el código HTML indicado y mostrando sus elementos:*/
const reemplazarInnerHTML = () => {
  const parrafo = document.getElementById("parrafo-reemplazo");
  parrafo.innerHTML =
    "<strong>Este es el nuevo contenido usando innerHTML.</strong> Puede incluir <em>HTML</em>.";
  document.getElementById("resultado-reemplazo").textContent =
    "Contenido reemplazado usando innerHTML.";
};

const reemplazarOuterHTML = () => {
  const parrafo = document.getElementById("parrafo-reemplazo");
  parrafo.outerHTML =
    "<div id='parrafo-reemplazo'><em>Este es el nuevo contenido reemplazado con outerHTML.</em> El elemento <strong>p</strong> fue reemplazado por un <strong>div</strong>.</div>";
  document.getElementById("resultado-reemplazo").textContent =
    "Contenido reemplazado usando outerHTML. El elemento original fue reemplazado.";
};

//? Inserción de elementos en el Dom
// Inserción de elementos en el DOM

const insertarAppendChild = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent = "Elemento añadido con appendChild.";
  nuevoElemento.classList.add("activa"); // Añadir clase activa
  contenedor.appendChild(nuevoElemento);
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado con appendChild.";
};

const insertarAdjacentElement = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent =
    "Elemento añadido con insertAdjacentElement en 'beforeend'.";
  nuevoElemento.classList.add("activa"); // Añadir clase activa
  contenedor.insertAdjacentElement("beforeend", nuevoElemento);
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado con insertAdjacentElement en posición 'beforeend'.";
};

const insertarAdjacentHTML = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  contenedor.insertAdjacentHTML(
    "afterbegin",
    "<p class='activa'>Elemento añadido con insertAdjacentHTML en 'afterbegin'.</p>"
  );
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado con insertAdjacentHTML en posición 'afterbegin'.";
};
//! Insertar en 'beforebegin' - dentro del contenedor antes de su primer hijo
const insertarAdjacentText = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const texto = document.createTextNode(
    "Texto añadido con insertAdjacentText antes del contenedor. "
  );
  const envoltura = document.createElement("span"); // Envoltura para aplicar la clase
  envoltura.classList.add("activa"); // Añadir clase activa
  envoltura.appendChild(texto);
  contenedor.insertAdjacentElement("beforebegin", envoltura);
  document.getElementById("resultado-insercion").textContent =
    "Texto insertado con insertAdjacentText en posición 'beforebegin'.";
};

//! Insertar en 'afterbegin' - dentro del contenedor antes de su primer hijo
const insertarAfterBegin = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent =
    "Elemento añadido con insertAdjacentElement en 'afterbegin'.";
  nuevoElemento.classList.add("activa"); // Añadir clase activa
  contenedor.insertAdjacentElement("afterbegin", nuevoElemento);
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado en posición 'afterbegin'.";
};

//! Insertar en 'beforeend' - dentro del contenedor después de su último hijo
const insertarBeforeEnd = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent =
    "Elemento añadido con insertAdjacentElement en 'beforeend'.";
  nuevoElemento.classList.add("activa"); // Añadir clase activa
  contenedor.insertAdjacentElement("beforeend", nuevoElemento);
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado en posición 'beforeend'.";
};

//! Insertar en 'afterend' - fuera del contenedor después de su cierre
const insertarAfterEnd = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent =
    "Elemento añadido con insertAdjacentElement en 'afterend'.";
  nuevoElemento.classList.add("activa"); // Añadir clase activa
  contenedor.insertAdjacentElement("afterend", nuevoElemento);
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado en posición 'afterend'.";
};

const insertarBefore = () => {
  const contenedor = document.getElementById("contenedor-insercion");
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent = "Elemento añadido con insertBefore.";
  nuevoElemento.classList.add("activa"); // Añadir clase activa
  const referencia = contenedor.querySelector("p"); // Primer párrafo en el contenedor
  contenedor.insertBefore(nuevoElemento, referencia);
  document.getElementById("resultado-insercion").textContent =
    "Elemento insertado con insertBefore antes del primer párrafo.";
};

// Función para borrar todas las inserciones con clase activa
const borrarInserciones = () => {
  const elementosActivos = document.querySelectorAll(".activa");
  elementosActivos.forEach((elemento) => elemento.remove()); // Eliminar todos los elementos con clase activa
  document.getElementById("resultado-insercion").textContent =
    "Elementos Borrados";
};

//? Eliminacion de elementos con Dom

// Eliminar elemento usando .remove()
const eliminarConRemove = () => {
  const parrafo = document.getElementById("parrafo-eliminar");
  if (parrafo) {
    parrafo.remove();
    document.getElementById("resultado-eliminar").textContent =
      "Elemento eliminado con .remove()";
  } else {
    document.getElementById("resultado-eliminar").textContent =
      "El elemento ya ha sido eliminado.";
  }
};

// Eliminar elemento usando .removeChild()
const eliminarConRemoveChild = () => {
  const contenedor = document.getElementById("contenedor-eliminar");
  const parrafo = document.getElementById("parrafo-removeChild");
  if (parrafo) {
    contenedor.removeChild(parrafo);
    document.getElementById("resultado-eliminar").textContent =
      "Elemento eliminado con .removeChild()";
  } else {
    document.getElementById("resultado-eliminar").textContent =
      "El elemento ya ha sido eliminado.";
  }
};

// Reemplazar elemento usando .replaceChild()
const reemplazarConReplaceChild = () => {
  const contenedor = document.getElementById("contenedor-eliminar");
  const parrafo = document.getElementById("parrafo-replaceChild");
  if (parrafo) {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent =
      "Este es el nuevo párrafo reemplazado con .replaceChild().";
    contenedor.replaceChild(nuevoElemento, parrafo);
    document.getElementById("resultado-eliminar").textContent =
      "Elemento reemplazado con .replaceChild()";
  } else {
    document.getElementById("resultado-eliminar").textContent =
      "El elemento ya ha sido reemplazado.";
  }
};

// Reponer los parrafos para poder borrarlos despues
const crearLosParrafos = () => {
  const contenedor = document.getElementById("contenedor-eliminar");
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar los párrafos

  const parrafoEliminar = document.createElement("p");
  parrafoEliminar.id = "parrafo-eliminar";
  parrafoEliminar.textContent = "Este párrafo será eliminado con .remove().";
  contenedor.appendChild(parrafoEliminar);

  const parrafoRemoveChild = document.createElement("p");
  parrafoRemoveChild.id = "parrafo-removeChild";
  parrafoRemoveChild.textContent =
    "Este párrafo será eliminado con .removeChild().";
  contenedor.appendChild(parrafoRemoveChild);

  const parrafoReplaceChild = document.createElement("p");
  parrafoReplaceChild.id = "parrafo-replaceChild";
  parrafoReplaceChild.textContent =
    "Este párrafo será reemplazado con .replaceChild().";
  contenedor.appendChild(parrafoReplaceChild);

  document.getElementById("resultado-eliminar").textContent =
    "Párrafos iniciales restaurados.";
};

//!Manipular Clases CSS
// Mostrar el valor de .className
const mostrarClassName = () => {
  const elemento = document.getElementById("elemento-clase");
  document.getElementById(
    "resultado-clase"
  ).textContent = `Valor de .className: ${elemento.className}`;
};

// Mostrar la lista de clases usando .classList
const mostrarClassList = () => {
  const elemento = document.getElementById("elemento-clase");
  const clases = Array.from(elemento.classList).join(", ");
  document.getElementById(
    "resultado-clase"
  ).textContent = `Lista de clases (.classList): ${clases}`;
};

// Añadir clases usando .classList.add()
const agregarClases = () => {
  const elemento = document.getElementById("elemento-clase");
  elemento.classList.add("resaltado", "negrita");
  document.getElementById("resultado-clase").textContent =
    "Clases 'resaltado' y 'negrita' añadidas.";
};

// Eliminar clases usando .classList.remove()
const quitarClases = () => {
  const elemento = document.getElementById("elemento-clase");
  elemento.classList.remove("resaltado", "negrita");
  document.getElementById("resultado-clase").textContent =
    "Clases 'resaltado' y 'negrita' eliminadas.";
};

// Verificar si una clase existe usando .classList.contains()
const verificarClase = () => {
  const elemento = document.getElementById("elemento-clase");
  const tieneClase = elemento.classList.contains("resaltado");
  document.getElementById(
    "resultado-clase"
  ).textContent = `¿El elemento tiene la clase 'resaltado'? ${tieneClase}`;
};

// Alternar clase usando .classList.toggle()
const cambiarClase = () => {
  const elemento = document.getElementById("elemento-clase");
  elemento.classList.toggle("resaltado");
  document.getElementById("resultado-clase").textContent =
    "Clase 'resaltado' alternada.";
};

// Alternar clase condicionalmente usando .classList.toggle(clase, expr)
const alternarClaseCondicional = () => {
  const elemento = document.getElementById("elemento-clase");
  const agregarClase = true; // Cambia esta variable a `false` para probar la condición
  elemento.classList.toggle("negrita", agregarClase);
  document.getElementById("resultado-clase").textContent = `Clase 'negrita' ${
    agregarClase ? "añadida" : "eliminada"
  } condicionalmente.`;
};

// Reemplazar una clase usando .classList.replace()
const reemplazarClase = () => {
  const elemento = document.getElementById("elemento-clase");
  if (elemento.classList.contains("resaltado")) {
    elemento.classList.replace("resaltado", "negrita");
    document.getElementById("resultado-clase").textContent =
      "Clase 'resaltado' reemplazada por 'negrita'.";
  } else {
    document.getElementById("resultado-clase").textContent =
      "La clase 'resaltado' no está presente para reemplazar.";
  }
};
