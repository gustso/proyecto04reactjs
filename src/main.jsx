import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { routes } from "./routes/routes";

//import App from './App.jsx'
import { ProveedorContext } from './contexts/AutorizacionesContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorContext>
      <CssBaseline />
      <RouterProvider router={routes}></RouterProvider>
    </ProveedorContext>
  </StrictMode>

)
