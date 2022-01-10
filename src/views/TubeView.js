import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getTubeMass } from "../utils/Utlis";
import { roundNumber } from "../utils/Utlis";
import { useGlobalContext } from "../Context";
import WeightSumView from "./WeightSumView";
import cuboidImage from "../assetes/tube.svg";
import { ToggleButton } from "react-bootstrap";

/**
 * Widok komponentu masy prostopadłościanu
 * @returns Widok komponentu masy prostopadłościanu
 */
const TubeView = () => {
  const refContainer = useRef(null);
  const {
    currentDensity,
    setCurrentDensity,
    setModalShow,
    setModalText,
    weightSum,
    setWeightSum,
  } = useGlobalContext();
  const [roundMass, setRoundMass] = useState(false);
  const [diameter, setDiameter] = useState(0);
  const [length, setLength] = useState(0);
  const [wallThickness, setWallThickness] = useState(0);
  const [tubeMass, setTubeMass] = useState(0);

  /**
   * Liczy masę prostopadłościanu
   */
  const countMass = () => {
    handleError();
    let mass = getTubeMass(diameter, length, wallThickness, currentDensity);
    if (roundMass) {
      mass = roundNumber(mass, 2);
    }

    setTubeMass(mass);
    addToWeightSum(diameter, length, wallThickness, mass);
  };

  /**
   * Tworzy i dodaje element wg zadanych parametrów do listy przechowujące wszystkie elemnty
   * @param {*} diameter Średnica
   * @param {*} dimH Wysokość / długość
   * @param {*} mass Masa
   */
  const addToWeightSum = (diameter, length, wallThickness, mass) => {
    const newItem = {
      id: weightSum.length + 1,
      dimension: diameter + "x" + length + "x" + wallThickness,
      elementMass: mass,
    };

    setWeightSum([...weightSum, newItem]);
  };

  /**
   * Sprawdza czy wartości wymiarów prostopadłościanu są poprawne
   */
  const handleError = () => {
    if (Number.isNaN(diameter) || diameter === 0) {
      setModalText("Niepoprawny wymiar średnicy - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(length) || length === 0) {
      setModalText("Niepoprawny wymiar długości - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(wallThickness) || wallThickness === 0) {
      setModalText("Niepoprawny wymiar grubości ścianki - sprawdź!");
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
        <h1>Masa rur</h1>
      </Container>
      <Container fluid="md">
        <Row>
          <Col>
            <h4>Wymiary elementu [mm]</h4>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="tubeForm.diameter"
                onChange={(e) => {
                  setDiameter(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Średnica [d]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="tubeForm.length"
                onChange={(e) => {
                  setLength(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość [L]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="tubeForm.wallThickness"
                onChange={(e) => {
                  setWallThickness(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Grubść ścianki:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="tubeForm.density_value"
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
            <Row>
              <Col>
                <ToggleButton
                  className="mb-2"
                  id="toggle-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={roundMass}
                  value="1"
                  onChange={(e) => setRoundMass(e.currentTarget.checked)}
                >
                  Zaokrąglij wynik
                </ToggleButton>
              </Col>
              <Col sm={8}>
                <Button
                  variant="success"
                  type="button"
                  className="btn btn-primary"
                  onClick={() => countMass()}
                >
                  Oblicz masę
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Container>
              <img
                src={cuboidImage}
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
        <h1>Masa: {tubeMass} kg</h1>
      </Container>
      <WeightSumView></WeightSumView>
    </>
  );
};

export default TubeView;
