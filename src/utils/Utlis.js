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
 * Zwraca masę walca
 * @param {*} diameter Średnica
 * @param {*} dimH Wyskokość
 * @returns
 */
export function getRollerMass(diameter, dimH, density) {
  console.log("Diameter: " + diameter + " Height: " + dimH);
  let volume = getRollerVolume(diameter, dimH);
  console.log("Objętość: " + volume);
  let mass = (volume * density) / 1000000;
  console.log("Masa: " + mass);
  return 0;
}

/**
 * Zwraca pole powierzchni całkowitej walca
 * @param {} diameter Średnica
 * @param {*} dimH Wysokość
 * @returns
 */
export function getRollerVolume(diameter, dimH) {
  return Math.PI * Math.pow(parseFloat(diameter) / 2, 2) * parseFloat(dimH);
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
