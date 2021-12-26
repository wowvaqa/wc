const Utlis = () => {};

/**
 * Liczy pole powierzchni prostopadłościanu
 * @param {*} dim_A Wymiar boku A
 * @param {*} dim_B Wymiar boku B
 * @param {*} dim_H Wymiar wysokości H
 * @returns
 */
export function countCuboidMass(dim_A, dim_B, dim_H, density) {
  console.log(
    "A: " + dim_A + " B: " + dim_B + " H: " + dim_H + " DENSITY: " + density
  );
  return parseInt(dim_A) * parseInt(dim_B) * parseInt(dim_H);
}

export default Utlis;
