import { useState } from "react";

const COMIDAS = ["empanadas","milanesas","asado","pizzas","sanguches"];

const Formulario = ({funcion})=>{
    //const nombre = "";
    const [nombre,setNombre] = useState("A");
    const [comida,setComida] = useState("");

    console.log(nombre);

    const procesarDatos = (e) => {
        e.preventDefault();
        const seleccion = {
            nombre : nombre.trim(),
            comida : comida.trim()
        };

        funcion(seleccion);
        setNombre("");
        setComida("");

    };
 
    return(
        <form onSubmit={procesarDatos}>
            <label htmlFor="nombre">Ingrese Nombre</label>
            <input type="text" id="nombre" 
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}/>
            <label htmlFor="comida">Elegir Comida</label>
            <select id="comida" value={comida}
                    onChange={(e)=>{setComida(e.target.value)}}>
                <option value="">Seleccionar una Comida</option>
                    {COMIDAS.map((c)=>(
                        <option key={c} value={c}>{c}</option>
                    ))}                
            </select>
            <button type="submit">Guardar</button>
        </form>
    )
}

export default Formulario;