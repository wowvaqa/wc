import React from "react";

const HomeView = () => {
  return (
    <>
      <div className="container">
        <h2>Kalkulator mas</h2>
        <p>
          Masa teoretyczna liczona jest dla wymiaru nominalnego i nie uwzględnia
          tolerancji wykonania.
          <br></br>
          Do wyliczenia dokładnej masy wyrobu konieczna jest gęstość konkretnego
          stupu np. stali, mosiądzu itp.
          <br></br>
          Wybierz kategorię z menu
        </p>
      </div>
    </>
  );
};

export default HomeView;
