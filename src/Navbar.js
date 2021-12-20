import React, { useContext } from "react";

const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Płaskowniki
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pręty
          </a>
        </li>
        <li className="nav-item"></li>
      </ul>
    </>
  );
};

export default Navbar;
