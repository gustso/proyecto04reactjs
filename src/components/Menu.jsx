import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import Inicio from "../pages/Inicio";
//import Pedidos from "../pages/Pedidos";

const Menu = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Sistema </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button color="inherit" component={ Link } to="/" variant="outlined">
                        Inicio
                    </Button>
                    <Button color="inherit" component={ Link } to="/pedidos" variant="outlined">
                        Pedidos
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
};
export default Menu;


/**


import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          App Profesional
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={RouterLink} to="/pedidos">
            Pedidos
          </Button>
          <Button color="inherit" component={RouterLink} to="/otro">
            Otro
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

 */