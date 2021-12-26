const Utlis = () => {};

/**
 * Liczy pole powierzchni prostopadłościanu
 * @param {*} dim_A Wymiar boku A
 * @param {*} dim_B Wymiar boku B
 * @param {*} dim_H Wymiar wysokości H
 * @returns
 */
export function getCuboidMass(dimA, dimB, dimH, density) {
  console.log(
    "A: " + dimA + " B: " + dimB + " H: " + dimH + " DENSITY: " + density
  );

  let volume = getCuboidVolume(dimA, dimB, dimH);
  console.log("Objętość: " + volume);
  let mass = (volume * density) / 1000000;
  console.log("Masa: " + mass);

  return mass;
}

/**
 * Liczy objętość prostopadłościanu
 * @param {*} dimA Wymiar boku A
 * @param {*} dimB Wymiar boku B
 * @param {*} dimH Wysokość
 * @returns Objętość [jed]3
 */
export function getCuboidVolume(dimA, dimB, dimH) {
  return parseFloat(dimA) * parseFloat(dimB) * parseFloat(dimH);
}

export default Utlis;
