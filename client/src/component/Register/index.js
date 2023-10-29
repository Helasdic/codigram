import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisterUsers } from "../../actions/userAction";

const Registration = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistration = async (e) => {
    e.preventDefault();
    dispatch(RegisterUsers(form));
    navigate("/login");
  };

  return (
    <div>
      <h2 className="text-uppercase text-center">registrasi</h2>
      <h4 className="text-uppercase text-center">Silahkan Isi Data Anda</h4>
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" onChange={(e) => setForm({ ...form, username: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </Form.Group>
            <Button onClick={handleRegistration} type="submit">
              Daftar
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
