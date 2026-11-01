import axios from "axios";

// CRUD Comidas
export const listarComidas = async () => {
    try {
        const respuesta = await axios.get('/data/comidas.json');
        if (!respuesta.data || typeof respuesta.data === 'string') {
            throw new Error("Hay un error en el archivo de carga de comidas");
        }
        return respuesta.data;
    }
    catch (e) {
        throw new Error("Hay un error en la carga de comidas");
    }


};

// otras funciones para comida