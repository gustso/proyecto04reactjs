import { createContext, useEffect, useState } from "react";
import { guardarUsuarioEnSesion, limpiarSesion, obtenerUsuarioEnSesion } from "../services/servicesUsuarios";

// definir
export const AutorizacionesContext = createContext(null);

// proveer
export const ProveedorContext = ({ children }) => {

    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(()=>{
        const guardado = obtenerUsuarioEnSesion();
        if (guardado) setUsuarioActivo(guardado);
    },[]);

    const guardarSesion = (usuario) => {
        setUsuarioActivo(usuario);
        guardarUsuarioEnSesion(usuario);
    }        
    
    const cerrarSesion = () => {
        setUsuarioActivo(null);
        limpiarSesion();
    };
    
    return (
        <AutorizacionesContext.Provider value={{ usuarioActivo, guardarSesion, cerrarSesion }}>
            {children}
        </AutorizacionesContext.Provider>
    )
}
