import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getCuboidMass } from "../utils/Utlis";
import { useGlobalContext } from "../Context";

const CuboidView = () => {
  const refContainer = useRef(null);
  const { currentDensity, setCurrentDensity } = useGlobalContext();
  const [dimA, setDimA] = useState(0);
  const [dimB, setDimB] = useState(0);
  const [dimH, setDimH] = useState(0);
  const [cuboidMass, setCuboidMass] = useState(0);
  /**
   * Liczy masę prostopadłościanu
   */
  const countMass = () => {
    const mass = getCuboidMass(dimA, dimB, dimH, currentDensity);
    setCuboidMass(mass);
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
        <h1>Masa blach / płaskowników</h1>
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
                controlId="cuboidForm.a_value"
                onChange={(e) => {
                  setDimA(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość boku A:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.b_value"
                onChange={(e) => {
                  setDimB(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość boku B:</Form.Label>
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
        <h1>Masa: {cuboidMass} kg</h1>
      </Container>
    </>
  );
};

export default CuboidView;
