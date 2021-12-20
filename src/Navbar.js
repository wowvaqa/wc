import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-5">
        <div className="container-sm">
          <a className="navbar-brand" href="/">
            WC
          </a>
          <a className="navbar-brand" href="/cuboid">
            Płaskowniki
          </a>
          <a className="navbar-brand" href="/roller">
            Pręty
          </a>
          <a className="navbar-brand" href="/materials">
            Materiały
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
