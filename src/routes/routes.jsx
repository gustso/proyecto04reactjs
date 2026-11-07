import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Error from "../pages/Error";
import Pedidos from "../pages/Pedidos";
import App from "../App";
import OtraPagina from "../pages/OtraPagina";
import ProtectorRuta from "../components/ProtectorRuta";

// se agregó el protector de ruta
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Inicio /> },
            {
                path: "/pedidos",
                element: <ProtectorRuta> <Pedidos /> </ProtectorRuta>
            },
            {
                path: "/otrapagina",
                element: <ProtectorRuta rolRequerido="admin"><OtraPagina /></ProtectorRuta>
            }]
    }
]);