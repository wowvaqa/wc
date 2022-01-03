import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../Context";

/**
 * Widok elementu tabeli materiałów.
 * @param {*} param0 Nazwa materiału, gęstość materiału
 * @returns Widok
 */
const MaterialItemView = ({ material, density }) => {
  const { setCurrentDensity } = useGlobalContext();

  return (
    <>
      <ListGroup.Item
        action
        variant="light"
        onClick={() => {
          setCurrentDensity(density);
        }}
      >
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
