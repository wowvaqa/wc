import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";

const MaterialItemView = ({ material, density }) => {
  return (
    <>
      <ListGroup.Item action variant="light">
        <Container fluid>
          <Row>
            <Col>
              <div className="bg-light border">{material}</div>
            </Col>

            <Col>
              <div className="bg-light border">{density}</div>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </>
  );
};

export default MaterialItemView;