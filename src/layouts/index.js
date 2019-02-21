import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';

import Navbar from '../components/navbar';

import './global.css';
import './style.css';

const Transition = posed.div({
  enter: { opacity: 1, x: 0, y: 0, delay: 300, beforeChildren: true },
  exit: { opacity: 0, x: ({ vertical }) => vertical ? 0 : 2000, y: ({ vertical }) => vertical ? 2000 : 0 }
});

const NavTransition = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0, }
});

const Layout = props => (
  <>
    <PoseGroup>
      {props.location.pathname !== '/' && <NavTransition key="navbar"><Navbar /></NavTransition>}
      <Transition id="transition-container" key={props.location.key} vertical={props.location.pathname === '/'}>
        {props.children}
      </Transition>
    </PoseGroup>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
