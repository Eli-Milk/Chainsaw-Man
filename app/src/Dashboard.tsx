import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

interface IUser{
    name:string
}

export const Dashboard = () => {

    const [user, setUser] = useState<IUser>();
    const [metrics, setmetrics] = useState({
        numberOfUsers:0,
        numberOfTasks:0
    })  

    useEffect(() => {
        getUser()
        getMetrics()
    }, []);

    const getUser = () => {
        const user = JSON.parse(localStorage.user);
        setUser(user);
    }

    const getMetrics = async () => {
        try {
            const res = await axios.get("http://localhost:4000/data/getdata");
            const data = {
                numberOfTasks:res.data.numberOfTasks,
                numberOfUsers:res.data.numberOfUsers
            }
            setmetrics(data)
        } catch (error) {
            alert("Hubo un error xddxdxddxd")
        }
    }



    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenido de nuevo {user?.name} </Card.Title>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de usuarios registrados: </Card.Title>
                                    <div> {metrics.numberOfUsers}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de cuestionarios creados: </Card.Title>
                                    <div> {metrics.numberOfTasks}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
