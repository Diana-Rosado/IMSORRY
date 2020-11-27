import React from "react";
import './navbar.css';

function Navbar() {
    return(
        <div className="Navbar">
      <h3>
        <a href="#home"> LOGO HERE</a>
      </h3>
      <p>
        <a href="#mission">Our Mission</a>
      </p>
      <p>
        <a href="#about">What we do</a>
      </p>
      <p>
        <a href="#contact">Contact Us</a>
      </p>
      <p>
        <a href="#donate">Donate</a>
      </p>
        </div>
    );
}

export default Navbar;