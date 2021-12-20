import React from "react";

import { useGlobalContext } from "../Context";

const MaterialsView = () => {
  const { materialsDensityState } = useGlobalContext();

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Materiał</th>
            <th scope="col">Gęstość</th>
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
      </table>
    </>
  );
};

export default MaterialsView;
