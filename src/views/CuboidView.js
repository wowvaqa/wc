import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { countCuboidArea } from "../utils/Utlis";

const CuboidView = () => {
  /**
   * Liczy pole powierzchni prostopadłościanu
   * @param {*} dim_a
   * @param {*} dim_b
   * @param {*} dim_h
   */
  const countMass = (dim_a, dim_b, dim_h) => {
    console.log("KLIK");
    console.log(countCuboidArea(dim_a, dim_b, dim_h));
  };

  return (
    <>
      <Container>
        <h1>Masa blach / płaskowników (mm)</h1>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <h3>Wymiary</h3>
            <Form>
              <Form.Group className="mb-3" controlId="cuboidForm.h_value">
                <Form.Label>Wysokość H:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cuboidForm.a_value">
                <Form.Label>Długość boku A:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cuboidForm.b_value">
                <Form.Label>Długość boku B:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
            <div className="container">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => countMass(1, 1, 1)}
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
