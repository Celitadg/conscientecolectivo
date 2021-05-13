/* -------------------------Toggle--------------------------------------- */
$("#toggle-derecha").click(
    function(){
        $("#seccion1").show();
        $("#seccion2").hide();
        $("#toggle-derecha").hide();
        $("#toggle-izquierda").show();
    }
);
$("#toggle-izquierda").click(
    function(){
        $("#seccion1").hide();
        $("#seccion2").show();
        $("#toggle-derecha").show();
        $("#toggle-izquierda").hide();
    }
);


/* -------------------------Documentales--------------------------------------- */


const filaDoc = document.querySelector(".contenedor-carrousel-doc");
const flechaIzquierdaDoc = document.querySelector("#flecha-izquierda-doc");
const flechaDerechaDoc = document.querySelector("#flecha-derecha-doc");

flechaIzquierdaDoc.addEventListener("click", () => {
    filaDoc.scrollLeft -= filaDoc.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-doc .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerechaDoc.addEventListener("click", () => {
    filaDoc.scrollLeft += filaDoc.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-doc .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const documentales = document.querySelectorAll(".documental-carrousel");
const numeroPaginasDocumentales = Math.ceil(documentales.length / 5);

for (let i=0; i < numeroPaginasDocumentales; i += 1){
    const indicadorDoc = document.createElement("button");
    if (i === 0){
        indicadorDoc.classList.add("activo");
    }
    document.querySelector(".indicadores-doc").appendChild(indicadorDoc);
    indicadorDoc.addEventListener("click", (e) => {
        filaDoc.scrollLeft = i * filaDoc.offsetWidth;
        document.querySelector(".indicadores-doc .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

documentales.forEach ((documental) => {
    documental.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            documentales.forEach(documental => documental.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

filaDoc.addEventListener("mouseleave", () => {
    documentales.forEach(documental => documental.classList.remove("hover"));
});


/* -------------------------Peliculas--------------------------------------- */


const filaPeli = document.querySelector(".contenedor-carrousel-peliculas");
const flechaIzquierdaPeli = document.querySelector("#flecha-izquierda-peliculas");
const flechaDerechaPeli = document.querySelector("#flecha-derecha-peliculas");

flechaIzquierdaPeli.addEventListener("click", () => {
    filaPeli.scrollLeft -= filaPeli.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-peliculas .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerechaPeli.addEventListener("click", () => {
    filaPeli.scrollLeft += filaPeli.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-peliculas .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const peliculas = document.querySelectorAll(".peliculas-carrousel");
const numeroPaginasPeli = Math.ceil(peliculas.length / 5);

for (let i=0; i < numeroPaginasPeli; i += 1){
    const indicadorPeli = document.createElement("button");
    if (i === 0){
        indicadorPeli.classList.add("activo");
    }
    document.querySelector(".indicadores-peliculas").appendChild(indicadorPeli);
    indicadorPeli.addEventListener("click", (e) => {
        filaPeli.scrollLeft = i * filaPeli.offsetWidth;
        document.querySelector(".indicadores-peliculas .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

peliculas.forEach ((peli) => {
    peli.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(peli => peli.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

filaPeli.addEventListener("mouseleave", () => {
    peliculas.forEach(peli => peli.classList.remove("hover"));
});

/* -------------------------Libros--------------------------------------- */


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


/* -------------------------Consumo--------------------------------------- */


const filaConsumo = document.querySelector(".contenedor-carrousel-consumo");
const flechaIzquierdaConsumo = document.querySelector("#flecha-izquierda-consumo");
const flechaDerechaConsumo = document.querySelector("#flecha-derecha-consumo");

flechaIzquierdaConsumo.addEventListener("click", () => {
    filaConsumo.scrollLeft -= filaConsumo.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-consumo .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerechaConsumo.addEventListener("click", () => {
    filaConsumo.scrollLeft += filaConsumo.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-consumo .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const consumo = document.querySelectorAll(".consumo-carrousel");
const numeroPaginasConsumo = Math.ceil(consumo.length / 5);

for (let i=0; i < numeroPaginasConsumo; i += 1){
    const indicadorConsumo = document.createElement("button");
    if (i === 0){
        indicadorConsumo.classList.add("activo");
    }
    document.querySelector(".indicadores-consumo").appendChild(indicadorConsumo);
    indicadorConsumo.addEventListener("click", (e) => {
        filaConsumo.scrollLeft = i * filaConsumo.offsetWidth;
        document.querySelector(".indicadores-consumo .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

consumo.forEach ((item) => {
    item.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            documentales.forEach(item => item.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

filaConsumo.addEventListener("mouseleave", () => {
    consumo.forEach(item => item.classList.remove("hover"));
});


/* -------------------------Alimentacion--------------------------------------- */

const filaAlimentacion = document.querySelector(".contenedor-carrousel-alimentacion");
const flechaIzquierdaAlimentacion = document.querySelector("#flecha-izquierda-alimentacion");
const flechaDerechaAlimentacion = document.querySelector("#flecha-derecha-alimentacion");

flechaIzquierdaAlimentacion.addEventListener("click", () => {
    filaAlimentacion.scrollLeft -= filaAlimentacion.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-alimentancion .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerechaAlimentacion.addEventListener("click", () => {
    filaAlimentacion.scrollLeft += filaAlimentacion.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-alimentancion .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const alimentacion = document.querySelectorAll(".alimentacion-carrousel");
const numeroPaginasAlimentacion = Math.ceil(alimentacion.length / 5);

for (let i=0; i < numeroPaginasAlimentacion; i += 1){
    const indicadorAlimentacion = document.createElement("button");
    if (i === 0){
        indicadorAlimentacion.classList.add("activo");
    }
    document.querySelector(".indicadores-alimentancion").appendChild(indicadorAlimentacion);
    indicadorAlimentacion.addEventListener("click", (e) => {
        filaAlimentacion.scrollLeft = i * filaAlimentacion.offsetWidth;
        document.querySelector(".indicadores-alimentancion .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

alimentacion.forEach ((item) => {
    item.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            alimentacion.forEach(item => item.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

filaAlimentacion.addEventListener("mouseleave", () => {
    alimentacion.forEach(item => item.classList.remove("hover"));
});


/* -------------------------Corrupcion--------------------------------------- */

const filaCorrupcion = document.querySelector(".contenedor-carrousel-corrupcion");
const flechaIzquierdaCorrupcion = document.querySelector("#flecha-izquierda-corrupcion");
const flechaDerechaCorrupcion = document.querySelector("#flecha-derecha-corrupcion");

flechaIzquierdaCorrupcion.addEventListener("click", () => {
    filaCorrupcion.scrollLeft -= filaCorrupcion.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-corrupcion .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerechaCorrupcion.addEventListener("click", () => {
    filaCorrupcion.scrollLeft += filaCorrupcion.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-corrupcion .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const corrupcion = document.querySelectorAll(".corrupcion-carrousel");
const numeroPaginasCorrupcion = Math.ceil(corrupcion.length / 5);

for (let i=0; i < numeroPaginasCorrupcion; i += 1){
    const indicadorCorrupcion = document.createElement("button");
    if (i === 0){
        indicadorCorrupcion.classList.add("activo");
    }
    document.querySelector(".indicadores-corrupcion").appendChild(indicadorCorrupcion);
    indicadorCorrupcion.addEventListener("click", (e) => {
        filaCorrupcion.scrollLeft = i * filaCorrupcion.offsetWidth;
        document.querySelector(".indicadores-corrupcion .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

corrupcion.forEach ((item) => {
    item.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            corrupcion.forEach(item => item.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

filaCorrupcion.addEventListener("mouseleave", () => {
    corrupcion.forEach(item => item.classList.remove("hover"));
});

/* -------------------------Residuos--------------------------------------- */

const filaResiduos = document.querySelector(".contenedor-carrousel-residuos");
const flechaIzquierdaResiduos = document.querySelector("#flecha-izquierda-residuos");
const flechaDerechaResiduos = document.querySelector("#flecha-derecha-residuos");

flechaIzquierdaResiduos.addEventListener("click", () => {
    filaResiduos.scrollLeft -= filaResiduos.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-residuos .activo");
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaDerechaResiduos.addEventListener("click", () => {
    filaResiduos.scrollLeft += filaResiduos.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores-residuos .activo");
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

const residuos = document.querySelectorAll(".residuos-carrousel");
const numeroPaginasResiduos = Math.ceil(residuos.length / 5);

for (let i=0; i < numeroPaginasResiduos; i += 1){
    const indicadorResiduos = document.createElement("button");
    if (i === 0){
        indicadorResiduos.classList.add("activo");
    }
    document.querySelector(".indicadores-residuos").appendChild(indicadorResiduos);
    indicadorResiduos.addEventListener("click", (e) => {
        filaResiduos.scrollLeft = i * filaResiduos.offsetWidth;
        document.querySelector(".indicadores-residuos .activo").classList.remove("activo");
        e.target.classList.add("activo");
    })
}

residuos.forEach ((item) => {
    item.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            residuos.forEach(item => item.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 350);
    })
});

filaResiduos.addEventListener("mouseleave", () => {
    residuos.forEach(item => item.classList.remove("hover"));
});