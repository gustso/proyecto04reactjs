import { useState } from "react";
//import { Form, Button } from "react-bootstrap"
import { Box, TextField, Select, FormControl, Button, MenuItem, InputLabel } from '@mui/material';


const Formulario = ({ funcion, comidas }) => {
    //const nombre = "";
    const [nombre, setNombre] = useState("");
    const [comida, setComida] = useState("");    
    const [subOpcion, setSubOpcion] = useState("");

    const comidaSeleccionada = comidas.find((c) => c.nombre === comida)
    const subOpciones = comidaSeleccionada?.opciones || [];
    //console.log("paso por aquí y comida tiene "+comida);

    const manejarCambios = (e) => {
        const value = e.target.value;
        setComida(value);
        setSubOpcion("");
    }
    // hasta aquí los cambios

    const procesarDatos = (e) => {
        e.preventDefault();
        const seleccion = {
            id: crypto.randomUUID(),
            nombre: nombre.trim(),
            comida: comida.trim(),
            subOpcion: subOpcion.trim()
        };
        funcion(seleccion);
        setNombre("");
        setComida("");
    };

    return (
        <div>
            <Box component="form" onSubmit={procesarDatos}>
                <FormControl fullWidth>                    
                    <TextField placeholder="ingresar un nombre" label="Nombre" variant="outlined"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />                    
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Seleccione</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Comida"
                        value={comida} onChange={manejarCambios}
                    >
                        {comidas.map((c) => (
                            <MenuItem key={c.nombre} value={c.nombre}>{c.nombre}</MenuItem>
                        ))}
                    </Select>
                    {comida && (
                        <FormControl fullWidth>
                        <Select id="subOption"
                            value={subOpcion}
                            onChange={(e) => setSubOpcion(e.target.value)}>
                            
                            {subOpciones.map((i) => (
                                <MenuItem key={i} value={i}>
                                    {i}
                                </MenuItem>))}
                        </Select>
                        </FormControl>
                    )}
                </FormControl>
                <Button variant="contained" type="submit">
                Guardar
            </Button>
            </Box>       
        
        </div >
    )
}

export default Formulario;