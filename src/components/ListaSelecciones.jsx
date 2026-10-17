import { Card } from "react-bootstrap"

const ListaSelecciones = ( {arreglo} ) => {

    return (
        <>
            {arreglo.map((p, i) => (
                <Card style={{ width: '18rem' }} key={i} value={p}>
                    <Card.Body>
                        <Card.Title>{p.nombre}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{p.comida}</Card.Subtitle>
                        <Card.Text>
                            Descripción de la comida.
                        </Card.Text>
                        <Card.Link href="#">Pagar</Card.Link>
                    </Card.Body>
                </Card>))}
        </>

    )
}

export default ListaSelecciones;