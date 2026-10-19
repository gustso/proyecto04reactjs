import { Box, FormControl, TextField } from "@mui/material"

const Filtro = ({busqueda, setBusqueda}) => {

    return (
        <>
        <Box component="form">
            <FormControl fullWidth>                    
                    <TextField placeholder="ingresar un nombre" label="Nombre" variant="filled"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)} />                    
                </FormControl>
        </Box>
        </>
    )
};

export default Filtro;