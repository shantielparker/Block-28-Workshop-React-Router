Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/blue">Blue</Link>
        </li>
        <li>
          <Link to="/red">Red</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;