import React from "react";

import { materialsDensity } from "../assetes/materialsDensity";

const MaterialsView = () => {
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
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MaterialsView;
