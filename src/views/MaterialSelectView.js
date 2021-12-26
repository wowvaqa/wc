import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Pagination } from "react-bootstrap";
import MaterialItemView from "./MaterialItemView";
import { useGlobalContext } from "../Context";

/**
 * Widok wyboru materiału przy obliczeniach masy
 */

const MaterialSelectView = () => {
  const { materialsDensityState } = useGlobalContext();
  const [actualPage, setActualPage] = useState(0);
  const [actualMaterials, setActualMaterials] = useState([]);

  var tablica = [];
  for (let i = 1; i < parseInt(materialsDensityState.length / 5) + 1; i++) {
    tablica.push({ id: i });
  }

  const setupActualMaterials = () => {
    var newActualMaterials = [];

    let startIndex = actualPage * 5;
    let endIndex = startIndex + 5;
    if (endIndex > materialsDensityState.length)
      endIndex = materialsDensityState.length;

    for (let i = startIndex; i < endIndex; i++) {
      newActualMaterials.push(materialsDensityState[i]);
    }

    setActualMaterials(newActualMaterials);
    console.log(actualMaterials);
  };

  const nextPage = () => {
    setActualPage(actualPage + 1);
    if (actualPage > parseInt(materialsDensityState.length / 5))
      setActualPage(parseInt(materialsDensityState.length / 5));
    console.log("Akutalna strona: " + actualPage);
    setupActualMaterials();
  };

  const prevPage = () => {
    setActualPage(actualPage - 1);
    if (actualPage < 0) setActualPage(0);
    console.log("Akutalna strona: " + actualPage);
    setupActualMaterials();
  };

  return (
    <>
      <Container>
        <h3>Gęstość materiałów</h3>
      </Container>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {actualMaterials.map((materialItem) => {
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
              <Pagination.Prev onClick={prevPage} />
              {tablica.map((e) => {
                return (
                  <Pagination.Item key={e.id}>{parseInt(e.id)}</Pagination.Item>
                );
              })}
              <Pagination.Next onClick={nextPage} />
              <Pagination.Last />
            </Pagination>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MaterialSelectView;
