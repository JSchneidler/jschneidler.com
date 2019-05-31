import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "./navbar.css";

const Navbar = () => (
  <div id="navbar">
    <Link to="/work">
      <button className="nav-button">My Work</button>
    </Link>
    <Link to="/me">
      <button className="nav-button">About Me</button>
    </Link>
    <Link to="/contact">
      <button className="nav-button">Contact</button>
    </Link>
  </div>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

Navbar.defaultProps = {
  siteTitle: ``
};

export default Navbar;
