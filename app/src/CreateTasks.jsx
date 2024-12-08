import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const CreateTasks = () => {
    const navigate = useNavigate();
    const [createTask, setcreateTask] = useState({
        title: "",
        description: "",
        dateFinish: "",
        status: "Activo",
        idUser: JSON.parse(localStorage.user)._id,
    });

    const onSubmit = async () => {
        try {
            const res = await axios.post(
                "http://localhost:4000/task/createTasks", 
                createTask);
            navigate("/list-t");
        } catch (error) {
            alert("Hubo un error", error);
        }
        console.log(createTask);
    };

    return (
        <Container>
            <Row className="mt-4">
                <Col md={{ span: 6, offset: 3 }}>
                    <h3 className="text-center">To-Do List</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Agrerga un titulo para tu tarea"
                                value={createTask.title}
                                onChange={(e) =>
                                    setcreateTask({
                                        ...createTask,
                                        title: e.target.value, 
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Agrega una pequeña descripción"
                                value={createTask.description}
                                onChange={(e) =>
                                    setcreateTask({
                                        ...createTask,
                                        description: e.target.value, 
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha Límite</Form.Label>
                            <Form.Control
                                type="Date"
                                name="dateFinish"
                                value={createTask.dateFinish}
                                onChange={(e) =>
                                    setcreateTask({
                                        ...createTask,
                                        dateFinish: e.target.value, 
                                    })
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={() => onSubmit()}>
                            Agregar Tarea
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
