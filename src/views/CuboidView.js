import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getCuboidMass } from "../utils/Utlis";
import { useGlobalContext } from "../Context";

const CuboidView = () => {
  const { currentDensity } = useGlobalContext();
  const [dimA, setDimA] = useState(0);
  const [dimB, setDimB] = useState(0);
  const [dimH, setDimH] = useState(0);
  /**
   * Liczy pole powierzchni prostopadłościanu
   * @param {*} dim_a
   * @param {*} dim_b
   * @param {*} dim_h
   */
  const countMass = () => {
    console.log("KLIK");
    console.log(getCuboidMass(dimA, dimB, dimH, currentDensity));
  };

  return (
    <>
      <Container>
        <h1>Masa blach / płaskowników (mm)</h1>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <h3>Wymiary elementu</h3>
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
    </>
  );
};

export default CuboidView;
