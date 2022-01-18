import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getSquareTubeMass } from "../utils/Utlis";
import { roundNumber } from "../utils/Utlis";
import { useGlobalContext } from "../Context";
import WeightSumView from "./WeightSumView";
import squareTubeImage from "../assetes/square_tube.svg";
import { ToggleButton } from "react-bootstrap";

/**
 * Widok komponentu masy prostopadłościanu
 * @returns Widok komponentu masy prostopadłościanu
 */
const SquareTubeView = () => {
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
  const [dimA, setDimA] = useState(0);
  const [dimB, setDimB] = useState(0);
  const [dimL, setDimL] = useState(0);
  const [wallThickness, setWallThickness] = useState(0);
  const [amount, setAmount] = useState(1);
  const [squareTubeMass, setSquareTubeMass] = useState(0);

  /**
   * Liczy masę prostopadłościanu
   */
  const countMass = () => {
    handleError();
    let mass = getSquareTubeMass(
      dimA,
      dimB,
      dimL,
      wallThickness,
      currentDensity,
      amount
    );
    if (roundMass) {
      mass = roundNumber(mass, 2);
    }

    setSquareTubeMass(mass);
    addToWeightSum(dimL, dimA, dimB, wallThickness, mass, amount);
  };

  /**
   * Tworzy i dodaje element do listy wszystkich elementów
   * @param {*} dimL Wysokość
   * @param {*} dimA Wymiar A
   * @param {*} dimB Wymiar B
   * @param {*} mass Masa
   * @param {*} amount Ilość
   */
  const addToWeightSum = (dimL, dimA, dimB, wallThickness, mass, amount) => {
    const newItem = {
      id: weightSum.length + 1,
      dimension:
        dimA +
        "x" +
        dimB +
        "x" +
        dimL +
        " [" +
        wallThickness +
        "]" +
        " (x" +
        amount +
        ")",
      elementMass: mass,
    };
    setWeightSum([...weightSum, newItem]);
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

    if (Number.isNaN(dimL) || dimL === 0) {
      setModalText("Niepoprawna długość elementu - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(wallThickness) || wallThickness === 0) {
      setModalText("Niepoprawna grugość ścianki - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(amount) || amount < 1) {
      setModalText("Niepoprawna ilość - sprawdź!");
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
        <h1>Masa rur kwadratowych</h1>
      </Container>
      <Container fluid="md">
        <Row>
          <Col>
            <h4>Wymiary elementu [mm]</h4>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="cuboidForm.a_value"
                onChange={(e) => {
                  setDimA(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość boku [A]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="cuboidForm.b_value"
                onChange={(e) => {
                  setDimB(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość boku [B]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="cuboidForm.l_value"
                onChange={(e) => {
                  setDimL(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Długość [L]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="cuboidForm.l_value"
                onChange={(e) => {
                  setWallThickness(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Grubość ścianki:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="cuboidForm.wall_t_value"
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

              <Form.Group
                className="mb-3"
                controlId="cuboidForm.amount_value"
                onChange={(e) => {
                  setAmount(parseFloat(e.target.value));
                }}
              >
                <Form.Label>Ilość [szt]:</Form.Label>
                <Form.Control type="text" placeholder="1" />
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
                src={squareTubeImage}
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
        <h1>Masa: {squareTubeMass} kg</h1>
      </Container>
      <WeightSumView></WeightSumView>
    </>
  );
};

export default SquareTubeView;
