import React, { useState, useContext } from "react";

// Kontekst aplikacji
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /**
   * Testowy useState, jeszcze nie wiem po co tu jest ;-)
   */
  const [testState, setTestState] = useState(false);

  /**
   * Zmienia testowy state na przeciwny
   */
  const changeTestState = () => {
    setTestState(!testState);
  };

  return (
    <AppContext.Provider value={{ testState, changeTestState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
