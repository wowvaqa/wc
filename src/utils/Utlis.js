const Utlis = () => {};

/**
 * Zwraca masę pręta sześciokątnego równoramiennego
 * @param {*} dimH Wysokość pręta
 * @param {*} dimL Długość pręta
 * @param {*} density Gęstość materiału
 * @returns
 */
export function getHexMass(dimH, dimL, density) {
  let volume = getHexVolume(dimH, dimL);
  console.log("Objętość: " + volume);
  let mass = (volume * parseFloat(density)) / 1000000;
  console.log("Masa: " + mass);
  return mass;
}

/**
 * Zwraca objętość prętka sześciokątnego foremnego
 * @param {*} dimH Wysokość pręta
 * @param {*} dimL Długość pręta
 * @returns Objętość pręta
 */
export function getHexVolume(dimH, dimL) {
  // Pole trójkąta równobocznego P=(a^2*√3)/4
  // Wysokość w trójkącie równobocznym h = a√3/2
  // Przeciwprostokątna trójkąta c = √(h^2 + (c/2)^2)
  // bok trójkąta równobocznego a = 2*h/√3
  // Pole sześciokąta foremnego P = (3*a^2*√3)2
  let a = parseFloat(dimH) / Math.sqrt(3);
  // let poleHex = (3 * Math.pow(a, 2) * Math.sqrt(3)) / 2;
  let poleHex = ((3 * Math.sqrt(3)) / 2) * Math.pow(a, 2);
  return poleHex * parseFloat(dimL);
}

/**
 * Liczy pole powierzchni prostopadłościanu
 * @param {*} dim_A Wymiar boku A
 * @param {*} dim_B Wymiar boku B
 * @param {*} dim_H Wymiar wysokości H
 * @param {*} round Czy wynik ma zostać zaokrąglony
 * @returns Pole powierzchni prostopadłościanu
 */
export function getCuboidMass(dimA, dimB, dimH, density) {
  let volume = getCuboidVolume(dimA, dimB, dimH);
  console.log("Objętość: " + volume);
  let mass = (volume * density) / 1000000;
  console.log("Masa: " + mass);

  return mass;
}

/**
 * Liczy masę rury kwadratowej
 * @param {*} dim_A Wymiar boku A
 * @param {*} dim_B Wymiar boku B
 * @param {*} dim_L Długość
 * @param {*} round Czy wynik ma zostać zaokrąglony
 * @returns Pole powierzchni prostopadłościanu
 */
export function getSquareTubeMass(dimA, dimB, dimL, wallThickness, density) {
  const outsideMass = getCuboidMass(dimA, dimB, dimL, density);
  const insideMass = getCuboidMass(
    dimA - wallThickness * 2,
    dimB - wallThickness * 2,
    dimL,
    density
  );
  return outsideMass - insideMass;
}

/**
 * Zwraca masę walca
 * @param {*} diameter Średnica walca
 * @param {*} dimH Wysokość walca
 * @param {*} density Gęstość walca
 * @param {*} round Czy wynik ma zostać zaokrąglony
 * @returns
 */
export function getRollerMass(diameter, dimH, density, amount) {
  // console.log("Diameter: " + diameter + " Height: " + dimH);
  let volume = getRollerVolume(diameter, dimH);
  // console.log("Objętość: " + volume);
  let mass = (volume * density) / 1000000;
  // console.log("Masa: " + mass);
  mass *= amount;
  return mass;
}

/**
 * Zwraca masę rury
 * @param {*} diameter Średnica rury
 * @param {*} dimL Długość rury
 * @param {*} wallThickness Grubość ścianki
 * @param {*} denisity gęstość materiału
 */
export function getTubeMass(diameter, length, wallThickness, denisity, amount) {
  const outsideMass = getRollerMass(diameter, length, denisity, 1);
  const insideMass = getRollerMass(
    diameter - wallThickness * 2,
    length,
    denisity,
    1
  );
  return (outsideMass - insideMass) * amount;
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
