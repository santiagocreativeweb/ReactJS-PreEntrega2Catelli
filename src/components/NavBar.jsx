import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">IPhone Santiago</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../../App.jsx">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/celulares" style={{ color: "black", textDecoration: "none" }}>Celulares</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/computadoras" style={{ color: "black", textDecoration: "none" }}>Computadoras</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#">Soporte</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
