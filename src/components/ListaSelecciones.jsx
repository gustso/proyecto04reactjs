//import { Card } from "react-bootstrap"
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

const ListaSelecciones = ({ arreglo }) => {

    return (
        <>
            {arreglo.map((p) => (
                <Card sx={{ minWidth: 275 }} key={p.id}>
                    <CardContent value={p}>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {p.nombre}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {p.comida}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                        <Typography variant="body2">
                            {p.subOpcion}
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    < CardActions >
                        <Button size="small" variant="contained">Pedir</Button>
                    </CardActions>
                </Card >
            ))}
        </>
    )
}

export default ListaSelecciones;