import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import hexImage from "../assetes/hex.svg";
import rollerImage from "../assetes/roller.svg";
import tubeImage from "../assetes/tube.svg";
import cuboidImage from "../assetes/cuboid.svg";
import squareTubeImage from "../assetes/square_tube.svg";

const HomeView = () => {
  return (
    <>
      <Container>
        <h2>Kalkulator mas</h2>
        <p>
          Masa teoretyczna liczona jest dla wymiaru nominalnego i nie uwzględnia
          tolerancji wykonania.
          <br></br>
          Do wyliczenia dokładnej masy wyrobu konieczna jest gęstość stopu np.
          stali, mosiądzu itp.
          <br></br>
          Wybierz kategorię z menu
        </p>
      </Container>

      <Container fluid="md">
        <Row xs={1} md={2} className="g-3">
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={hexImage} />
              <Card.Body>
                <Card.Title>Pręty sześciokątne</Card.Title>
                <Card.Link href="/hex">Masa prętów sześciokątnych</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={rollerImage} />
              <Card.Body>
                <Card.Title>Pręty okrągłe</Card.Title>
                <Card.Link href="/roller">Masa prętów okrągłych</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={tubeImage} />
              <Card.Body>
                <Card.Title>Rury okrągłe</Card.Title>
                <Card.Link href="/tubes">Masa rur okrągłych</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={cuboidImage} />
              <Card.Body>
                <Card.Title>Płaskowniki</Card.Title>
                <Card.Link href="/cuboid">Masa płaskowników</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={squareTubeImage} />
              <Card.Body>
                <Card.Title>Rury kwadratowe</Card.Title>
                <Card.Link href="/squaretubes">Masa rur kwadratowych</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeView;
