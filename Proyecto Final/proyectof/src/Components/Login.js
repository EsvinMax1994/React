import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '24rem', backgroundColor: '#adadad' }} >
                <Card.Body>
                    <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-start w-100">Usuario:</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-start w-100">Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login