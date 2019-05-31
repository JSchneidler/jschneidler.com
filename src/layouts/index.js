import React from "react";
import PropTypes from "prop-types";

import PageTransition from "../components/pagetransition";
import Navbar from "../components/navbar";

import "./global.css";
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
