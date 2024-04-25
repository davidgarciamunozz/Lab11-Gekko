export const obtenerAPI = async (url) => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    return data;
};

export const obtenerAgentePorId = async (id) => {
    const agentes = await obtenerAPI();
    for (const agente of agentes.data){
        if(agente.uuid === id){
            return agente;
        }
    }
    throw new Error("Agente no encontrado");
}

export class Agente {
    nombre;
    imagen;
    descripcion;
    id;

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

        const boton = document.createElement("button");
        boton.textContent = "Ver información";
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