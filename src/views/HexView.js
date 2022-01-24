import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import MaterialSelectView from "./MaterialSelectView";
import { getHexMass } from "../utils/Utlis";
import { roundNumber } from "../utils/Utlis";
import { useGlobalContext } from "../Context";
import WeightSumView from "./WeightSumView";
import hexImage from "../assetes/hex.svg";
import { ToggleButton } from "react-bootstrap";

/**
 * Widok komponentu masy prostopadłościanu
 * @returns Widok komponentu masy prostopadłościanu
 */
const HexView = () => {
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
  const [dimH, setDimH] = useState(0);
  const [length, setLength] = useState(0);
  const [hexMass, setHexMass] = useState(0);
  const [amount, setAmount] = useState(1);

  /**
   * Liczy masę prostopadłościanu
   */
  const countMass = () => {
    handleError();
    let mass = getHexMass(dimH, length, currentDensity, amount);
    if (roundMass) {
      mass = roundNumber(mass, 2);
    }

    setHexMass(mass);
    addToWeightSum(dimH, length, mass, amount);
  };

  /**
   * Tworzy i dodaje element wg zadanych parametrów do listy przechowujące wszystkie elemnty
   * @param {*} diameter Średnica
   * @param {*} dimH Wysokość / długość
   * @param {*} mass Masa
   * @param {*} amount Ilość
   */
  const addToWeightSum = (diameter, length, mass, amount) => {
    const newItem = {
      id: weightSum.length + 1,
      dimension: diameter + "x" + length + " (x" + amount + ")",
      elementMass: mass,
    };

    setWeightSum([...weightSum, newItem]);
  };

  /**
   * Sprawdza czy wartości wymiarów prostopadłościanu są poprawne
   */
  const handleError = () => {
    if (Number.isNaN(dimH) || dimH === 0) {
      setModalText("Niepoprawny wymiar średnicy - sprawdź!");
      setModalShow(true);
    }

    if (Number.isNaN(length) || length === 0) {
      setModalText("Niepoprawny wymiar długości - sprawdź!");
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
        <h1>Masa pręta sześciokątnego</h1>
      </Container>
      <Container fluid="md">
        <Row>
          <Col>
            <h4>Wymiary elementu [mm]</h4>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="hexForm.height"
                onChange={(e) => {
                  setDimH(parseFloat(e.target.value.replace(",", ".")));
                }}
              >
                <Form.Label>Wysokość [H]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="hexForm.length"
                onChange={(e) => {
                  setLength(parseFloat(e.target.value.replace(",", ".")));
                }}
              >
                <Form.Label>Długość [L]:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="hexForm.density_value"
                onChange={(e) => {
                  setCurrentDensity(
                    parseFloat(e.target.value.replace(",", "."))
                  );
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
                controlId="hexForm.amount_value"
                onChange={(e) => {
                  setAmount(parseFloat(e.target.value.replace(",", ".")));
                }}
              >
                <Form.Label>Ilość [szt]:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1"
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
                src={hexImage}
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
        <h1>Masa: {hexMass} kg</h1>
      </Container>
      <WeightSumView></WeightSumView>
    </>
  );
};

export default HexView;
