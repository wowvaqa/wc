const Utlis = () => {};

/**
 * Liczy pole powierzchni prostopadłościanu
 * @param {*} dim_A Wymiar boku A
 * @param {*} dim_B Wymiar boku B
 * @param {*} dim_H Wymiar wysokości H
 * @param {*} round Czy wynik ma zostać zaokrąglony
 * @returns Pole powierzchni prostopadłościanu
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
 * @param {*} diameter Średnica walca
 * @param {*} dimH Wysokość walca
 * @param {*} density Gęstość walca
 * @param {*} round Czy wynik ma zostać zaokrąglony
 * @returns
 */
export function getRollerMass(diameter, dimH, density) {
  // console.log("Diameter: " + diameter + " Height: " + dimH);
  let volume = getRollerVolume(diameter, dimH);
  // console.log("Objętość: " + volume);
  let mass = (volume * density) / 1000000;
  // console.log("Masa: " + mass);
  return mass;
}

/**
 * Zwraca masę rury
 * @param {*} diameter Średnica rury
 * @param {*} dimL Długość rury
 * @param {*} wallThickness Grubość ścianki
 * @param {*} denisity gęstość materiału
 */
export function getTubeMass(diameter, length, wallThickness, denisity) {
  const outsideMass = getRollerMass(diameter, length, denisity);
  const insideMass = getRollerMass(diameter - (wallThickness*2), length, denisity);
  return outsideMass - insideMass;
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

/**
 * Zaokrągla zadaną liczbę do zadanej ilości po przecinku
 * @param {*} number Liczba do zaokrąglenia
 * @param {*} decimalPlaces Miejsca po przecinku
 * @returns Zaokrąglona liczba
 */
export function roundNumber(number, decimalPlaces) {
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.round(number * factorOfTen) / factorOfTen;
}

export default Utlis;
