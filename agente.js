import { obtenerAgentePorId } from "./utils.js";



const render = async () => {
    const params = new URLSearchParams(window.location.search);

    const id= params.get ("id");

    const personaje = await obtenerAgentePorId(parseInt(id));  
    
    const container = document.querySelector(".agenteMain");
    const descriptionSelector = document.querySelector(".desc");
    const role = document.querySelector("role");

    
    const containerImg = document.createElement("img");
    containerImg.src = personaje.fullPortrait;
    containerImg.alt = personaje.displayName;

    const nombreAgente = document.createElement("h2");
    nombreAgente.textContent = this.displayName;
    
    const descripcionAgente = document.createElement("p");
    descripcionAgente.textContent = this.description;
    
    const roleAgente = document.createElement("p");



    role.appendChild()
    descriptionSelector.appendChild(descripcionAgente);
    container.appendChild(containerImg);


    return container;
};

document.addEventListener("DOMContentLoaded", render);