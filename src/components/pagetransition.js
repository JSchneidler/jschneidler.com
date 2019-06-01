import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./pagetransition.css";

const timeout = 100;

const PageTransition = ({ children, location }) => (
  <TransitionGroup id="transition-group">
    <CSSTransition
      key={location.pathname}
      timeout={{ enter: timeout, exit: timeout }}
      classNames="page-transition"
      appear
    >
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
);

export default PageTransition;
