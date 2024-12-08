import { Button, Card, Container } from 'react-bootstrap'
import { ListTasks } from './components/ListTasks';
import { useNavigate } from 'react-router-dom';

export const ShowTasks = () => {
    const user = JSON.parse(localStorage.user);
    const navigate = useNavigate();

    return (
        <Container>
            <Card>
                <Card.Body>
                    <h3>Bienvenido de nuevo, {user.name}</h3>
                    <Card.Title>{user.rol == "administrator" ? "Cuestionarios creados" : "Tus Tareas"}</Card.Title>
                    <Card.Text><b>ToDo´s recientes:</b></Card.Text>
                    <ListTasks rol={user.rol} />
                </Card.Body>
            </Card>
        </Container>
    )
}
