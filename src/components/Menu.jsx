import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import { useAutorizaciones } from "../hooks/useAutorizaciones";

const Menu = () => {

  const { usuarioActivo, cerrarSesion } = useAutorizaciones();
  const navegar = useNavigate();

  const gestionarCerrarSesion = () => {
    cerrarSesion();
    navegar("/");
  };

return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Sistema </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={Link} to="/" variant="outlined">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/pedidos" variant="outlined">
            Pedidos
          </Button>
          { usuarioActivo?.rol == "admin" && (
          <Button color="inherit" component={Link} to="/otrapagina" variant="outlined">
            Otra Página
          </Button>)}
          { usuarioActivo && (
            <Button color="inherit" variant="outlined"
            onClick={ gestionarCerrarSesion }>
              {usuarioActivo.nombre} Cerrar Sesion
            </Button>
          )}          
        </Box>
      </Toolbar>
    </AppBar>
  )
};
export default Menu;
