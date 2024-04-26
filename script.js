import { obtenerAPI, Agente } from "./utils.js";


const render = async () => {
    const data = await obtenerAPI();
    
    const personajes = data.data;
    const contenedor = document.querySelector("#personajes-container");

    console.log(personajes);
    
    for (const personaje of personajes){
        const agente = new Agente(
            personaje?.displayName,
            personaje?.description,
            personaje?.uuid,
            personaje?.displayIcon,
            personaje?.role?.description,
            personaje?.fullPortrait
        );
        const agenteRender = agente.render();
        contenedor.appendChild(agenteRender);
    }
};

document.addEventListener("DOMContentLoaded", render);
