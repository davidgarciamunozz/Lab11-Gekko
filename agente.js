import { obtenerAgentePorId } from "./utils.js";

const render = async () => {
    const params = new URLSearchParams(window.location.search);

    const id= params.get ("id");

    const agente = await obtenerAgentePorId(parseInt(id));  
    
    const container = document.querySelector(".agenteMain");
    
    const containerImg = document.createElement("img");
    containerImg.src = personaje.fullPortrait;
    containerImg.alt = personaje.displayName;


    container.appendChild(containerImg);

    return container;
};

document.addEventListener("DOMContentLoaded", render);