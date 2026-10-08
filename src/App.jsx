import Formulario from "./components/Formulario";

const App = () =>{

  const nombre = "Juan";
  const apellido = "Ramirez";

  const guardarSeleccion = (seleccion)=>{
    console.log(seleccion);

  };

return (
  <Formulario nombre= {nombre} 
              apellido={apellido} 
              funcion={guardarSeleccion}/>
)};

export default App;