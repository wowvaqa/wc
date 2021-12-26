import React, { useState, useContext } from "react";
import { materialsDensity } from "./assetes/materialsDensity";

// Kontekst aplikacji
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Lista materiałów i ich gęstości
  const [materialsDensityState, setMaterialsDensityState] =
    useState(materialsDensity);
  // Aktualna gęstość materiału do obliczenia masy prostopadłościanu oraz walz=ca
  const [currentDensity, setCurrentDensity] = useState(0);
  // Okno modlane wyświetljące komunikaty
  const [modalShow, setModalShow] = useState(false);
  // Tekst w oknie modalnym
  const [modalText, setModalText] = useState("no text");

  return (
    <AppContext.Provider
      value={{
        materialsDensityState,
        setMaterialsDensityState,
        currentDensity,
        setCurrentDensity,
        modalShow,
        setModalShow,
        modalText,
        setModalText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
