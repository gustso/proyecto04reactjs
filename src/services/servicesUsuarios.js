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

// sesion
export const guardarUsuarioEnSesion = (usuario) => {
    sessionStorage.setItem("usuarioEnSesion", JSON.stringify(usuario));
};

export const obtenerUsuarioEnSesion = () => {
    try{
        const u = sessionStorage.getItem("usuarioEnSesion");
        return u ? JSON.parse(u) : null;        
    } catch {
        return null;
    }
};

export const limpiarSesion = () => {
    sessionStorage.removeItem("usuarioEnSesion");
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
