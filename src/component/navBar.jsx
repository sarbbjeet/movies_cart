import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <Navbar
      style={{ margin: "5px", backgroundColor: "rgba(200,220,220,0.5)" }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/customers">
              Customers
            </Nav.Link>
            <Nav.Link as={Link} to="/rentails">
              Rentails
            </Nav.Link>
            {!props.user && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {!props.user && (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
            {props.user && (
              <Nav.Link as={Link} to="/account">
                {props.user.name}
              </Nav.Link>
            )}
            {props.user && (
              <Nav.Link as={Link} to="/logout">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
