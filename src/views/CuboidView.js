import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getCuboidMass } from "../utils/Utlis";
import { useGlobalContext } from "../Context";

const CuboidView = () => {
  const refContainer = useRef(null);
  const { currentDensity, setCurrentDensity, setModalShow, setModalText } =
    useGlobalContext();
  const [dimA, setDimA] = useState(0);
  const [dimB, setDimB] = useState(0);
  const [dimH, setDimH] = useState(0);
  const [cuboidMass, setCuboidMass] = useState(0);

  /**
   * Liczy masę prostopadłościanu
   */
  const countMass = () => {
    handleError();

    const mass = getCuboidMass(dimA, dimB, dimH, currentDensity);
    setCuboidMass(mass);
  };

  /**
   * Sprawdza czy wartości wymiarów prostopadłościanu są poprawne
   */
  const handleError = () => {
    if (Number.isNaN(dimA) || dimA === 0) {
      setModalText("Niepoprawny wymiar A - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(dimB) || dimB === 0) {
      setModalText("Niepoprawny wymiar B - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(dimH) || dimH === 0) {
      setModalText("Niepoprawny wymiar H - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(currentDensity) || currentDensity === 0) {
      setModalText(
        "Niepoprawna gęstość materiału - wpisz poprawną wartość lub wybierz materiał z listy!"
      );
      setModalShow(true);
    }
  };

  /**
   * Update formularza gęstości po kliknieciu w materiał
   */
  useEffect(() => {
    refContainer.current.value = currentDensity;
  }, [currentDensity]);

  return (
    <>
      <Container>
        <h1>Masa blach / płaskowników</h1>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <h4>Wymiary elementu [mm]</h4>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.h_value"
                onChange={(e) => {
                  setDimH(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Wysokość H:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.a_value"
                onChange={(e) => {
                  setDimA(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość boku A:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.b_value"
                onChange={(e) => {
                  setDimB(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość boku B:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.density_value"
                onChange={(e) => {
                  setCurrentDensity(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Gęstość [g/cm3]:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0.0"
                  ref={refContainer}
                />
              </Form.Group>
            </Form>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => countMass()}
            >
              Oblicz masę
            </button>
          </Col>
          <Col>
            <Container>
              <MaterialSelectView />
            </Container>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <h1>Masa: {cuboidMass} kg</h1>
      </Container>
    </>
  );
};

export default CuboidView;
