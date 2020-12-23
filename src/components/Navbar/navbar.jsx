import React from "react";
import { makeStyles } from "@material-ui/core";
import navbarStyleSheet from "./navbarStyles.js";

const useStyles = makeStyles(navbarStyleSheet);

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <a href="#home" className={classes.home}>
        Imagication
      </a>

      <ul>
        <li>
          <a href="#mission">Our Mission</a>
        </li>
        <li>
          <a href="#about">What we do</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#donate">Donate</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
