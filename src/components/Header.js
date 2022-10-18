import React from "react";
import logo from "../react-logo.png";

import "./Header.css";

function header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <img alt="logo" src={logo} />
        <h3>ReactFacts</h3>
        <ul className="header-ul">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
