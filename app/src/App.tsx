import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();


  const onSubmit = async () => {
    //Peticion a la DB
    try {
      const res = await axios.post("http://localhost:4000/users/singin", { email, password })
      const user = res.data.user;
      user.logined = true;
      localStorage.user = JSON.stringify(user)
      if (user.rol == "administrator") {
        navigate("/home", )
        setTimeout(() => window.location.reload(), 0);
      } else {
        navigate("/list-t")
        setTimeout(() => window.location.reload(), 0);
      }
    } catch (error) {
      alert("Informacion Incorrecta")
    }
    console.log(email, password)
  }

  return (
    <Container className="mt-3">
      <Card className="mb-5" style={{ width: "30rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title className="text-center">
            Bienvenido a ToDUTMA
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Correo electronico:</Form.Label>
              <Form.Control placeholder="Ingresa tu correo electronico" type="email" name="email" onChange={(e) => setEmail(e.target.value)}  /* Texto informativo para el usuario */ />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control placeholder="Ingresa tu contraseña" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Row className="text-center">
              <Col>
                <Button onClick={() => onSubmit()}>Ingresar</Button>
              </Col>
              <Col>
                <p>¿No tienes cuenta? <a href="/register-user">¡Registrate!</a></p>

              </Col>
            </Row>
            <Row>
              <p>¿Olvidaste tu contraseña? <a href="/recover-password">Recuperala aquí</a></p>
            </Row>

          </Form>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default App;
