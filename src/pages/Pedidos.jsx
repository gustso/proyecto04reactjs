// hooks
import { useEffect, useState, useMemo } from "react";
import { Container, Grid, Box, Alert } from '@mui/material';

import ListaSelecciones from "../components/ListaSelecciones.jsx";
import Formulario from "../components/Formulario";
import Filtro from "../components/Filtro.jsx";

import { useComidas } from "../hooks/useComidas";

const ALMACEN_LOCAL = "pedidosGuardados";

const Pedidos = () => {
    const [pedidos, setPedidos] = useState(() => {
        const guardados = localStorage.getItem(ALMACEN_LOCAL);
        return guardados ? JSON.parse(guardados) : [];
    });

    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        localStorage.setItem(ALMACEN_LOCAL, JSON.stringify(pedidos));
    }, [pedidos]);

    const guardarSeleccion = (seleccion) => {
        console.log(seleccion);
        setPedidos((prevPedidos) => [...prevPedidos, seleccion]);
        console.log(pedidos);
    };

    const pedidosFiltrados = useMemo(() => {
        const nombreABuscar = busqueda.trim().toLowerCase();
        if (!nombreABuscar) return pedidos;

        return pedidos.filter((p) =>
            p.nombre.toLowerCase().includes(nombreABuscar))
    }, [pedidos, busqueda]);

    const { comidas, error } = useComidas();
    if (error) return <Alert severity="error">{error}</Alert>;
    
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Formulario funcion={guardarSeleccion} comidas={comidas} />
                    </Grid>
                    <Grid size={6}>
                        <Filtro busqueda={busqueda} setBusqueda={setBusqueda} />
                        <ListaSelecciones arreglo={pedidosFiltrados} />
                    </Grid>
                </Grid>
            </Box>
        </Container>)
}

export default Pedidos;


