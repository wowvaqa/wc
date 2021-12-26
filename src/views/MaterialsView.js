import React from "react";

import { useGlobalContext } from "../Context";
import { Table } from "react-bootstrap";

const MaterialsView = () => {
  const { materialsDensityState } = useGlobalContext();

  return (
    <>
      <div className="container">
        <Table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Materiał</th>
              <th scope="col">Gęstość g/cm3</th>
            </tr>
          </thead>
          <tbody>
            {materialsDensityState.map((materialItem) => {
              const { id, material, density } = materialItem;
              return (
                <tr key={id}>
                  <td>{material}</td>
                  <td>{density}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MaterialsView;
