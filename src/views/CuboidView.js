import React from "react";

const CuboidView = () => {
  return (
    <>
      <div className="container">
        <h2>Masa blach / płaskowników</h2>
      </div>
      <div className="container">
        <form className="mb-3">
          <label for="dim_1" class="form-label">
            Wysokość H:
          </label>
          <input
            type="dim_1"
            class="form-control"
            id="dim_1"
            aria-describedby="dimension1"
          />
          <label for="dim_0" class="form-label">
            Długość boku A:
          </label>
          <input
            type="dim_0"
            class="form-control"
            id="dim_0"
            aria-describedby="dimension0"
          />
          <label for="dim_1" class="form-label">
            Długość boku B:
          </label>
          <input
            type="dim_1"
            class="form-control"
            id="dim_1"
            aria-describedby="dimension1"
          />
          <div id="dimensionHelp" class="form-text">
            Wszystkie długości podaj proszę w [mm]
          </div>
        </form>
      </div>

      <div className="container">
        <button type="button" class="btn btn-primary">
          Dodaj do tabeli obliczeń
        </button>
      </div>
    </>
  );
};

export default CuboidView;
