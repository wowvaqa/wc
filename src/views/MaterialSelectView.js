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
  const [currentDensity, setCurrentDensity] = useState(0);

  const tablica = [];
  for (let i = 1; i < parseInt(materialsDensityState.length / 5) + 1; i++) {
    tablica.push({ id: i });
  }

  useEffect(() => {
    setupActualMaterials(0);
  }, []);

  /**
   * Uaktualnienie widoku listy materiałów do wyboru
   * @param {*} page : ;
   */
  const setupActualMaterials = (page) => {
    var newActualMaterials = [];

    let startIndex = page * 5;
    let endIndex = startIndex + 5;
    if (endIndex > materialsDensityState.length)
      endIndex = materialsDensityState.length;

    for (let i = startIndex; i < endIndex; i++) {
      newActualMaterials.push(materialsDensityState[i]);
    }

    setActualMaterials(newActualMaterials);
    console.log(actualMaterials);
  };

  /**
   * Następna strona z widoku wyboru materiałów
   */
  const nextPage = () => {
    let page = actualPage + 1;
    if (page > parseInt(materialsDensityState.length / 5))
      page = parseInt(materialsDensityState.length / 5);
    setActualPage(page);
    setupActualMaterials(page);
  };

  /**
   * Poprzednia strona z widoku wyboru materiałów
   */
  const prevPage = () => {
    let page = actualPage - 1;
    if (page < 0) page = 0;
    setActualPage(page);
    setupActualMaterials(page);
  };

  /**
   * Uaktualnia aktualną gęstość materiału po kliknięciu w materiał z listy dostępnych
   * @param {} density
   */
  const updateCurrentDensity = (density) => {
    setCurrentDensity(density);
    console.log(density);
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
                return (
                  <MaterialItemView
                    key={id}
                    {...materialItem}
                    updateCurrentDensity={updateCurrentDensity}
                  />
                );
              })}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <div>
            <Pagination>
              <Pagination.Prev onClick={prevPage} />
              <Pagination.Item>{actualPage}</Pagination.Item>
              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MaterialSelectView;
