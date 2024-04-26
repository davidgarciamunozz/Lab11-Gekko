const API_URL = "https://valorant-api.com/v1";


export const obtenerAPI = async (url) => {
    const response = await fetch(`${API_URL}/agents`);
    const data = await response.json();
    return data;
};


export const obtenerAgentePorId = async (id) => {
    console.log(id);
    const list = await obtenerAPI();
    console.log("lista completa");
    console.log(list);

    // filtro para encontrar el agente.
    const agenteEncontrado = list.data.filter((agente) => {
        return agente.uuid === id;
    })

    console.log("agente encontrado", agenteEncontrado)

    if(agenteEncontrado.length === 0){
        throw new Error("Agente no encontrado");
    }
    
    return agenteEncontrado[0];
}

export class Agente {
    constructor(nombre, descripcion, id, imagen){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.id = id;
        this.imagen = imagen;
    }

    render(){
        const contenedorAgente = document.createElement("div");
        contenedorAgente.id = this.id;
        contenedorAgente.classList.add("agente");

        const imagenAgente = document.createElement("img");
        imagenAgente.src = this.imagen;
        imagenAgente.alt = this.nombre;
        imagenAgente.classList.add("agente__imagen");

        const contenedorNombre = document.createElement("div");
        contenedorNombre.classList.add("agente__nombre-contenedor");


        const nombreAgente = document.createElement("h2");
        nombreAgente.textContent = this.nombre;
        nombreAgente.classList.add("agente__nombre");

        const descripcionAgente = document.createElement("p");
        descripcionAgente.textContent = this.descripcion;
        descripcionAgente.classList.add("agente__descripcion");

        const trashImage = document.createElement("img");
        trashImage.src = "trash.svg";
        trashImage.alt = "trash";
        trashImage.width = 20;

        const boton = document.createElement("button");
        boton.textContent = "Ver información";
        boton.appendChild(trashImage);       
        boton.classList.add("agente__boton");
        boton.addEventListener("click", () => {
            window.location.href = `segunda_pagina.html?id=${this.id}`;
        });

        contenedorAgente.appendChild(imagenAgente);
        contenedorAgente.appendChild(contenedorNombre);
        contenedorNombre.appendChild(nombreAgente);
        contenedorNombre.appendChild(descripcionAgente);
        contenedorNombre.appendChild(boton);


        return contenedorAgente;
    }
}