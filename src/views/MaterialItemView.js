import React, { useState } from "react";
import { ListGroup, Stack, ToggleButton, ButtonGroup, Container, Row, Col } from "react-bootstrap";

const MaterialItemView = () => {
  const [materialName, setMaterialName] = useState("Stal");
  const [materialDensity, setMaterialDensity] = useState("0.75");
  return (
    <>
      <ListGroup.Item action variant="light">
        <Container fluid>
          <Row>
            <Col>
              <div>Nazwa:</div>
            </Col>
            <Col>
              <div className="bg-light border">{materialName}</div>
            </Col>
            <Col>
              <div>Gęstość:</div>
            </Col>
            <Col>
              <div className="bg-light border">{materialDensity}</div>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </>
  );
};

export default MaterialItemView;
