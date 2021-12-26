import React from "react";
import { Container, Row, Col, ListGroup, Pagination } from "react-bootstrap";
import MaterialItemView from "./MaterialItemView";
import { useGlobalContext } from "../Context";

/**
 * Widok wyboru materiału przy obliczeniach masy
 */

const MaterialSelectView = () => {
  const { materialsDensityState } = useGlobalContext();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {materialsDensityState.map((materialItem) => {
                const { id } = materialItem;
                return <MaterialItemView key={id} {...materialItem} />;
              })}
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
    </>
  );
};

export default MaterialSelectView;
