//import { USUARIOS as usuarios } from "../data/usuarios.js";
import { listarUsuarios } from '../services/servicesUsuarios';

// funcionalidad del contexto

const servicesAutorizaciones = (() => {

    const login = async (user, password) => {

        const usuarios = await listarUsuarios();
        
        const encontrado = usuarios.find(
            u => u.user === user && u.password === password
        );
        
        if (!encontrado) return null;
                
        return { id: encontrado.id, nombre: encontrado.nombre };           
    };
    // ver credenciales, observar la autenticación

    return (
        { login }
    )
}) ();

export default servicesAutorizaciones;