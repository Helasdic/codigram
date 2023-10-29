import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/posting">Posting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={logoutHandler} className="text-danger" href="/login">
                Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
