export const obtenerPersonajes = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
    return data;
};


