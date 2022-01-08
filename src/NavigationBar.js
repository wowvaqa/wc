import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import rollerIcon from "./assetes/rollerIcon.svg";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WC</Navbar.Brand>
          <Nav variant="pills" className="me-auto" defaultActiveKey="/">
            <Nav.Item>              
              <Nav.Link href="/cuboid">Płaskowniki</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/roller">Pręty</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/materials">Materiały</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavigationBar;
