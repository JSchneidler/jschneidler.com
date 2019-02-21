import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './navbar.css';

const Navbar = () => (
  <div id="navbar">
    <Link to="/work"><button class="nav-button">My Work</button></Link>
    <Link to="/me"><button class="nav-button">About Me</button></Link>
    <Link to="/contact"><button class="nav-button">Contact</button></Link>
  </div>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
