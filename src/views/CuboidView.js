import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";

const CuboidView = () => {
  return (
    <>
      <Container>
        <h2>Masa blach / płaskowników</h2>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <Form>
              <label for="dim_1" class="form-label">
                Wysokość H:
              </label>
              <input
                type="dim_1"
                class="form-control"
                id="dim_1"
                aria-describedby="dimension1"
              />
              <label for="dim_0" class="form-label">
                Długość boku A:
              </label>
              <input
                type="dim_0"
                class="form-control"
                id="dim_0"
                aria-describedby="dimension0"
              />
              <label for="dim_1" class="form-label">
                Długość boku B:
              </label>
              <input
                type="dim_1"
                class="form-control"
                id="dim_1"
                aria-describedby="dimension1"
              />
              <div id="dimensionHelp" class="form-text">
                Wszystkie długości podaj proszę w [mm]
              </div>
            </Form>
          </Col>
          <Col>
            <Container>
              <MaterialSelectView />
            </Container>
          </Col>
        </Row>
      </Container>

      <div className="container">
        <button type="button" class="btn btn-primary">
          Oblicz masę
        </button>
      </div>
    </>
  );
};

export default CuboidView;
