import React from "react";
import {
  ListGroup,
  Container,
  Form,
  Tab,
  Row,
  Col,
  Sonnet,
  Pagination,
} from "react-bootstrap";
import MaterialItemView from "./MaterialItemView";

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
              <Row>
                <Col>
                  <ListGroup>
                    <MaterialItemView />
                    <MaterialItemView />
                    <MaterialItemView />
                    <MaterialItemView />
                    <MaterialItemView />
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <div>
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </div>
              </Row>
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
