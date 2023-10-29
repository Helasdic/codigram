import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, resetInitialStateUser } from "../../actions/userAction";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginUserResult, loginUserLoading, loginUserError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginUserError) {
      setError(loginUserError.response.data.message);
    }
  }, [dispatch, navigate, loginUserError]);

  useEffect(() => {
    if (loginUserResult) {
      dispatch(resetInitialStateUser());
      navigate("/");
    }
  }, [loginUserResult, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      LoginUser({
        username: username,
        password: password,
      })
    );
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Form className="col-md-3" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="h3 mb-3 fw-normal text-center">Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          {loginUserLoading ? (
            <Button variant="primary" type="button" disabled>
              Loading ...
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          )}
          <Link to="/register">
            <Button variant="danger">Register</Button>
          </Link>
          <p className="mt-5 mb-3 text-body-secondary text-center">© 2023</p>
        </Form>
      </Container>
    </>
  );
};

export default Login;
