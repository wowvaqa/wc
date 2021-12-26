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

  /**
   * Zmienia testowy state na przeciwny
   */
  const setMaterialDensityList = () => {};

  return (
    <AppContext.Provider
      value={{
        materialsDensityState,
        setMaterialDensityList,
        currentDensity,
        setCurrentDensity,
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
