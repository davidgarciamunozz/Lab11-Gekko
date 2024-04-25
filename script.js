import { obtenerPersonajes } from './utils.js';

class Personaje {
    constructor(displayIcon, displayName, description, id) {
        this.displayIcon = displayIcon;
        this.displayName = displayName;
        this.description = description;
        this.id = id;
    }

    render() {
        return `
        <div class="personaje-card">
            <img src="${this.displayIcon}" alt="${this.displayName}">
            <div class="personaje-card-overlay">
            <h2>${this.displayName}</h2>
            <p>${this.description}</p>
            <button onclick="verInformacion(${this.id})">Ver información detallada</button>
            </div>
        </div>
        `;
    }
}

function verInformacion(id) {
    window.location.href = `segunda_pagina.html?id=${id}`;
}


async function mostrarPersonajes() {
    try {
        const data = await obtenerPersonajes();
        const personajesContainer = document.getElementById('personajes-container');
        
        data.data.forEach(personaje => {
            const { displayIcon, displayName, description, uuid } = personaje;
            const card = new Personaje(displayIcon, displayName, description, uuid);
            personajesContainer.innerHTML += card.render();
        });
    } catch (error) {
        console.error('Error al mostrar los personajes:', error);
    }
}

mostrarPersonajes();
