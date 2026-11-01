import { useEffect, useState } from 'react';
import { listarComidas } from '../services/servicesComidas';

export const useComidas = () => {
    const [comidas, setComidas] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const cargarComidas = async () => {             
            // esto se usa en pedidos, pero no se como funciona el catch con el error
            try {
                setError(null);
                const data = await listarComidas();
                //setComidas(data);
                setComidas(Array.isArray(data) ? data : []);
            } catch (e) {                    
                setComidas([]);       
                setError(e.message);                
            }
        };

        cargarComidas();

    }, []);

    return { comidas, error };
};