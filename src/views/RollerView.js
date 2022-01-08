import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getRollerMass } from "../utils/Utlis";
import { useGlobalContext } from "../Context";
import WeightSumView from "./WeightSumView";
import rollerImage from "../assetes/roller.svg";

/**
 * Widok komponentu masy walca
 * @returns Widok komponentu masy walca
 */
const RollerView = () => {
  const refContainer = useRef(null);
  const {
    currentDensity,
    setCurrentDensity,
    setModalShow,
    setModalText,
    weightSum,
    setWeightSum,
  } = useGlobalContext();
  const [diameter, setDiameter] = useState(0);
  const [dimH, setDimH] = useState(0);
  const [rollerMass, setRollerMass] = useState(0);
  /**
   * Liczy masę walca
   */
  const countMass = () => {
    handleError();
    const mass = getRollerMass(diameter, dimH, currentDensity);
    setRollerMass(mass);
    addToWeightSum(diameter, dimH, mass);
  };

  /**
   * Tworzy i dodaje element wg zadanych parametrów do listy przechowujące wszystkie elemnty
   * @param {*} diameter Średnica
   * @param {*} dimH Wysokość / długość
   * @param {*} mass Masa
   */
  const addToWeightSum = (diameter, dimH, mass) => {
    const newItem = {
      id: weightSum.length + 1,
      dimension: diameter + "x" + dimH,
      elementMass: mass,
    };

    setWeightSum([...weightSum, newItem]);
  };

  /**
   * Sprawdza czy wartości wymiarów prostopadłościanu są poprawne
   */
  const handleError = () => {
    if (Number.isNaN(diameter) || diameter === 0) {
      setModalText("Niepoprawna średnica - sprawdź!");
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
        <h1>Masa prętów</h1>
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
                <Form.Label>Wysokość [H]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.diameter_value"
                onChange={(e) => {
                  setDiameter(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Średnica [d]:</Form.Label>
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
              <img
                src={rollerImage}
                alt="cocktail db logo"
                className="weightElement"
              />
              <MaterialSelectView />
            </Container>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <h1>Masa: {rollerMass} kg</h1>
      </Container>
      <WeightSumView></WeightSumView>
    </>
  );
};

export default RollerView;
