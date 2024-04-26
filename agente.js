import { obtenerAgentePorId } from "./utils.js";

const render = async () => {
    const params = new URLSearchParams(window.location.search);

    const id= params.get("id");

    console.log("ID :: ", id);

    const agente = await obtenerAgentePorId(id);  
    
    console.log(agente);

    const container = document.querySelector(".agenteMain");
    
    const containerImg = document.createElement("img");
    containerImg.src = agente.fullPortrait == null ? agente.displayIcon : agente.fullPortrait;
    containerImg.alt = agente.displayName;
    containerImg.classList.add("agente__imagen");
 
    container.appendChild(containerImg);

    const spanName = document.createElement("span");
    spanName.textContent = agente?.displayName;
    container.appendChild(spanName);

    const pDescription = document.createElement("p");
    pDescription.textContent = agente?.description;
    container.appendChild(pDescription);

    const RolDescription = document.createElement("p");
    RolDescription.textContent = agente?.rol?.description;
    container.appendChild(RolDescription);

    return container;
};

document.addEventListener("DOMContentLoaded", render);