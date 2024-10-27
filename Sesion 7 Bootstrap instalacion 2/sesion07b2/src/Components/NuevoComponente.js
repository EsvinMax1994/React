import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const NuevoComponente = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Componente con React Bootstrap</h1>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 1</Card.Title>
                            <Card.Text>Este es un ejemplo de tarjeta usando React Bootstrap</Card.Text>
                            <div className="text-end">
                                <Button variant="primary">Leer mas</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 2</Card.Title>
                            <Card.Text>Este es el segundo ejemplo de tarjeta usando React Bootstrap</Card.Text>
                            <div className="text-end">
                                <Button variant="danger">Stop</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 3</Card.Title>
                            <Card.Text>Este es el tercer ejemplo de tarjeta usando React Bootstrap</Card.Text>
                            <div className="text-end">
                                <Button variant="success">Guardar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 4</Card.Title>
                            <Card.Text>Este es el cuarto ejemplo de tarjeta usando React Bootstrap</Card.Text>
                            <div className="text-end">
                                <Button variant="warning">Actualizar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default NuevoComponente