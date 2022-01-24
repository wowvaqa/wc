import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WC</Navbar.Brand>
          <Nav variant="pills" className="me-auto" defaultActiveKey="/">
            <NavDropdown title="Kalkulatory" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" href="/cuboid">
                Płaskowniki
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" href="/roller">
                Pręty okrągłe
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" href="/hex">
                Pręty sześciokątne
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4" href="/tubes">
                Rury okrągłe
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4" href="/squaretubes">
                Rury kwadratowe
              </NavDropdown.Item>
            </NavDropdown>
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
