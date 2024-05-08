import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="web-header">
        <FontAwesomeIcon icon={faExchange} />
        <p className="navbar-text">unit converter</p>
      </div>
    </header>
  );
};

export default Navbar;