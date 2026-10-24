
import { routes } from "./routes/routes";
import { Outlet, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Menu from "./components/Menu"
import { Container } from "@mui/material";

const App = () => {

  return (
    <Container >
      <Menu />
      <Outlet />
    </Container>

  )

};

export default App;