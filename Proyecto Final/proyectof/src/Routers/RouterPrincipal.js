import React from "react";
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { ToDoList } from "../Components/ToDoList";


// Componente Login
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault(); // Evitar recargar la página
        navigate('/todolist'); // Redirigir al componente ToDoList
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '24rem', backgroundColor: '#adadad' }} >
                <Card.Body>
                    <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
                    <Form onSubmit={handleLogin}>
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
    );
};

// Configuración de rutas principales
export const RouterPrincipales = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta predeterminada para el login */}
                <Route path="/" element={<Login/>} />
                {/* Ruta para el ToDoList */}
                <Route path="/todolist" element={<ToDoList/>} />
            </Routes>
        </BrowserRouter>
    );
};
