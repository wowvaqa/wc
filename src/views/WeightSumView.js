import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useGlobalContext } from "../Context";

const WeightSumView = () => {
  const { weightSum, setWeightSum } = useGlobalContext();
  const [localWeightSum, setLocalWeightSum] = useState([]);
  const [tableWeightSum, setTableWeightSum] = useState(0);

  const clearTable = () => {
    setWeightSum([]);
    setTableWeightSum(0);
  };

  useEffect(() => {
    setLocalWeightSum(weightSum);

    // eslint-disable-next-line array-callback-return
    weightSum.map((item) => {
      const { elementMass } = item;
      setTableWeightSum(tableWeightSum + elementMass);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weightSum]);

  return (
    <>
      <Container>
        <h3>Lista elementów</h3>
        <Table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Wymiary</th>
              <th scope="col">Masa</th>
            </tr>
          </thead>
          <tbody>
            {localWeightSum.map((item) => {
              const { id, dimension, elementMass } = item;
              return (
                <tr key={id}>
                  <td>{dimension}</td>
                  <td>{elementMass}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <button type="button" className="btn btn-primary" onClick={clearTable}>
          Wyczyść tabelę
        </button>
      </Container>
      <Container>
        <h1>Suma masy elementów tabeli: {tableWeightSum} kg</h1>
      </Container>
    </>
  );
};

export default WeightSumView;
