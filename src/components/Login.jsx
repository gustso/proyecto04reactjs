import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import servicesAutorizaciones from "../services/servicesAutorizaciones";
import { useAutorizaciones } from "../hooks/useAutorizaciones";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const { guardarSesion } = useAutorizaciones();
    const navegar = useNavigate();

    const [error, setError] = useState("")

    const gestionarLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const usuarioEnSesion = await servicesAutorizaciones.login(user, password);

            if (!usuarioEnSesion) {
                setError('Credenciales inválidas GS')
                return
            }

            guardarSesion(usuarioEnSesion);
            navegar("/pedidos");
        } catch (e) {
            setError("No se ha podido conectar a la BD",e);
        }
    };

    return (
        <Box component="form" onSubmit={gestionarLogin} noValidate>
            {error && (
                <Alert severity="error" onClose={() => setError('')}>
                    {error}
                </Alert>
            )}
            <TextField label="Usuario" value={user}
                onChange={(e) => setUser(e.target.value)}
                fullWidth required
            />
            <TextField label="Contraseña" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                fullWidth required
            />
            <Button type="submit" variant="contained" fullWidth>
                Ingresar
            </Button>
        </Box>
    )
}
export default Login;