const fila = document.querySelector(".contenedor-carrousel");
const flechaIzquierda = document.querySelector("#flecha-izquierda");
const flechaDerecha = document.querySelector("#flecha-derecha");

flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const libros = document.querySelectorAll(".libro-carrousel");
const numeroPaginas = Math.ceil(libros.length / 5);

for (let i=0; i < numeroPaginas; i += 1){
    const indicador = document.createElement("button");
    if (i === 0){
        indicador.classList.add("activo");
    }
    document.querySelector(".indicadores").appendChild(indicador);
    indicador.addEventListener("click", (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector(".indicadores .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

libros.forEach ((libro) => {
    libro.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            libros.forEach(libro => libro.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

fila.addEventListener("mouseleave", () => {
    libros.forEach(libro => libro.classList.remove("hover"));
});