import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getRollerMass } from "../utils/Utlis";
import { useGlobalContext } from "../Context";

const RollerView = () => {
  const refContainer = useRef(null);
  const { currentDensity, setCurrentDensity } = useGlobalContext();
  const [diameter, setDiameter] = useState(0);
  const [dimH, setDimH] = useState(0);
  const [rollerMass, setRollerMass] = useState(0);
  /**
   * Liczy masę walca
   */
  const countMass = () => {
    const mass = getRollerMass(diameter, dimH, currentDensity);
    setRollerMass(mass);
  };

  /**
   * Update formularza gęstości po kliknieciu w materiał
   */
  useEffect(() => {
    refContainer.current.value = currentDensity;
  }, [currentDensity]);

  return (
    <>
      <Container>
        <h1>Masa prętów</h1>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <h4>Wymiary elementu [mm]</h4>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.h_value"
                onChange={(e) => {
                  setDimH(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Wysokość H:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.diameter_value"
                onChange={(e) => {
                  setDiameter(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Średnica:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="cuboidForm.density_value"
                onChange={(e) => {
                  setCurrentDensity(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Gęstość [g/cm3]:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0.0"
                  ref={refContainer}
                />
              </Form.Group>
            </Form>
            <div className="container">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => countMass()}
              >
                Oblicz masę
              </button>
            </div>
          </Col>
          <Col>
            <Container>
              <MaterialSelectView />
            </Container>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <h1>Masa: {rollerMass} kg</h1>
      </Container>
    </>
  );
};

export default RollerView;
