import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cuboid">Płaskowniki</Nav.Link>
            <Nav.Link href="/roller">Pręty</Nav.Link>
            <Nav.Link href="/materials">Materiały</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavigationBar;
