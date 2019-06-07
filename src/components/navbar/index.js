import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "./navbar.css";

const Navbar = () => (
  <div id="navbar">
    <Link to="/work" className="link">
      My Work
    </Link>
    <Link to="/me" className="link">
      About Me
    </Link>
    <Link to="/contact" className="link">
      Contact
    </Link>
  </div>
);

export default Navbar;
