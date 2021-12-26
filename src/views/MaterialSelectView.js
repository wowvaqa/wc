import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Pagination } from "react-bootstrap";
import MaterialItemView from "./MaterialItemView";
import { useGlobalContext } from "../Context";

/**
 * Widok wyboru materiału przy obliczeniach masy
 */

const MaterialSelectView = () => {
  const { materialsDensityState } = useGlobalContext();
  const [pageArray, usePageArray] = useState([]);

  var tablica = [];

  for (let i = 1; i < parseInt(materialsDensityState.length / 5) + 1; i++) {
    tablica.push({ id: i });
  }

  return (
    <>
      <Container>
        <h3>Gęstość materiałów</h3>
      </Container>
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
              {tablica.map((e) => {
                return (
                  <Pagination.Item key={e.id}>{parseInt(e.id)}</Pagination.Item>
                );
              })}
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
