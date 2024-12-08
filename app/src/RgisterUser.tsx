import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const RegisterUser = () => {
    const [name, setname] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [lastname, setlastname] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [rol, setrol] = useState<string>("client");

    const navigate = useNavigate();


    const onSubmit = async() => {

        /* Enviar data al server */
        try {
            await axios.post("http://localhost:4000/users/create", {name, lastname, email, password, rol})
        } catch (error) {
            alert("Hubo un error")
        }
        console.log(name, lastname, email, password, rol)
        navigate("/")
    }
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Formulario para registro de usuarios</Card.Title>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control onChange={(e) => setname(e.target.value)} name="name" placeholder="Ingresa tu nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellidos:</Form.Label>
                            <Form.Control onChange={(e) => setlastname(e.target.value)} name="lastname" placeholder="Ingresa tu apellido" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control onChange={(e) => setemail(e.target.value)} name="email" type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control onChange={(e) => setpassword(e.target.value)} name="password" type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>
                        <Button onClick={() => onSubmit()}>Registrate!</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
