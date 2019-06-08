import React from "react";
import PropTypes from "prop-types";

import PageTransition from "../pagetransition";
import Navbar from "../navbar";

import "../../styles/global.css";
import "./style.css";

const Layout = ({ children, location }) => (
  <div id="layout-root">
    <PageTransition location={location}>{children}</PageTransition>
    <Navbar />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
