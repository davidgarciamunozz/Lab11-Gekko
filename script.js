import { obtenerAPI, Agente } from "./utils.js";


const renderizarPersonajes = async (textoBusqueda) => {
    const data = await obtenerAPI();

    const textoLimpio = textoBusqueda.toLowerCase();
    console.log(textoLimpio);
    const contenedor = document.querySelector("#personajes-container");
    contenedor.innerHTML = "";
    // console.log(personajes);
    
    for (const personaje of data.data){
        const agente = new Agente(
            personaje?.displayName,
            personaje?.description,
            personaje?.uuid,
            personaje?.displayIcon,
            personaje?.role?.description,
            personaje?.fullPortrait
        );
        const agenteRender = agente.render();

        if(textoLimpio === "" || personaje?.displayName.toLowerCase().includes(textoLimpio)){
            contenedor.appendChild(agenteRender);
            agente.addEventListeners();
        }
    }
};

const render = async () => {
       await renderizarPersonajes("");

       const barraBusqueda = document.querySelector(".barraBusqueda");
       barraBusqueda.addEventListener("input", async (event) =>{
           const textBusqueda = event.target.value;
           await renderizarPersonajes(textBusqueda);
       });
};

document.addEventListener("DOMContentLoaded", render);
