import axios from "axios";

// CRUD Usuarios
export const listarUsuarios = async () => {
    try {
        const respuesta = await axios.get('/data/usuarios.json');
        return respuesta.data;
    } catch (e) {
        throw new Error(e);
    }
};

export const listarUsuariosActivos = () => {

};

export const agregarUsuario = (u) => {

}

export const eliminarUsuario = async (id) => {

};

export const obtenerUsuarioPorId = async (id) => {

};

export const crearUsuario = async (u) => {

};
