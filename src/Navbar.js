import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link" aria-current="page" href="/cuboid">
            Płaskowniki
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/roller">
            Pręty
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/materials">
            Materiały
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
