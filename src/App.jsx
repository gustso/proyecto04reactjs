import { useEffect, useState, useMemo } from "react";
import Formulario from "./components/Formulario";
//import { Container } from "react-bootstrap";
import { COMIDAS as comidas } from "./data/comidas.js";
import { OPCIONES as opciones } from "./data/comidas.js";
import ListaSelecciones from "./components/ListaSelecciones.jsx";
import Filtro from "./components/Filtro.jsx";
//import { Row, Col } from "react-bootstrap"
import { Container, Grid, Box } from '@mui/material';

const ALMACEN_LOCAL = "pedidosGuardados";

const App = () => {

  const [pedidos, setPedidos] = useState(() => {
    const guardados = localStorage.getItem(ALMACEN_LOCAL);
    // operador ternario
    return guardados ? JSON.parse(guardados) : [];
  });

  const [comidasEncontradas, setComidasEncontradas] = useState([]);
  
  const [opcionesEncontradas, setOpcionesEncontradas] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  // carga la comida
  useEffect(() => {
    setComidasEncontradas(comidas)
    // agregado
    setOpcionesEncontradas(opciones);
    console.log("Estoy cargando una sola vez las comidas");
  }, []);

  // carga las selecciones
  useEffect(() => {
    localStorage.setItem(ALMACEN_LOCAL, JSON.stringify(pedidos));
    console.log("Estoy cargando TODA VEZ que se actualiza las selecciones");
  }, [pedidos]);

  const guardarSeleccion = (seleccion) => {
    setPedidos((prevPedidos) => [...prevPedidos, seleccion]);
    //setPedidos((prevPedidos)=>[...prevPedidos,{nombre:"Augusto",comida:"otra comida"}]);
    console.log(pedidos);
  };

  const pedidosFiltrados = useMemo(() => {
    const nombreABuscar = busqueda.trim().toLowerCase();
    if (!nombreABuscar) return pedidos;

    return pedidos.filter((p)=>
      p.nombre.toLowerCase().includes(nombreABuscar))
  }, [pedidos, busqueda]);  
  
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Formulario funcion={guardarSeleccion} comidas={comidasEncontradas} opciones={opcionesEncontradas} />
        </Grid>
        <Grid size={6}>
          <Filtro busqueda={busqueda} setBusqueda={setBusqueda}/>
          <ListaSelecciones arreglo={pedidosFiltrados} />
        </Grid>
      </Grid>
      </Box>
    </Container>)
};

export default App;