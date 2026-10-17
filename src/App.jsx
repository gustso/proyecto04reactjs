import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";
import { COMIDAS as comidas } from "./data/comidas.js";
// agregado
import { OPCIONES as opciones } from "./data/comidas.js";
import ListaSelecciones from "./components/ListaSelecciones.jsx";
import { Row, Col } from "react-bootstrap"

const ALMACEN_LOCAL = "pedidosGuardados";

const App = () => {

  const [pedidos, setPedidos] = useState(()=>{
      const guardados = localStorage.getItem(ALMACEN_LOCAL);
      // operador ternario
    return guardados ? JSON.parse(guardados) : []; 
  });

  const [comidasEncontradas, setComidasEncontradas] = useState([]);
  // agregado
  const [opcionesEncontradas,setOpcionesEncontradas] = useState([]);

  // carga la comida
  useEffect(() => {
    setComidasEncontradas(comidas)
    // agregado
    setOpcionesEncontradas(opciones);
    console.log("Estoy cargando una sola vez las comidas");
  }, []);

  // carga las selecciones
  useEffect (()=>{
    localStorage.setItem(ALMACEN_LOCAL,JSON.stringify(pedidos));
    console.log("Estoy cargando TODA VEZ que se actualiza las selecciones");
  },[pedidos]);

  const guardarSeleccion = (seleccion) => {
    setPedidos((prevPedidos) => [...prevPedidos, seleccion]);
    //setPedidos((prevPedidos)=>[...prevPedidos,{nombre:"Augusto",comida:"otra comida"}]);
    console.log(pedidos);
  };

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <ListaSelecciones arreglo={pedidos} />
        </Col>
        <Col sm={4}>
          <Formulario funcion={guardarSeleccion} comidas={comidasEncontradas} opciones={opciones}/>
        </Col>
      </Row>
    </Container>

  )
};

export default App;