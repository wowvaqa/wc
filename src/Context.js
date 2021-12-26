import React, { useState, useContext } from "react";
import { materialsDensity } from "./assetes/materialsDensity";

// Kontekst aplikacji
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /**
   * Gęstość materiału
   */
  const [materialsDensityState, setMaterialsDensityState] =
    useState(materialsDensity);
  const [currentDensity, setCurrentDensity] = useState(0);
  const [modalShow, setModalShow] = useState(false);
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
