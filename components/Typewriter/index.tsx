import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInterval from '../../hooks/useInterval';

import styles from './styles.module.css';

const Typewriter = ({ text, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  // Type timer
  useInterval(
    () => setCurrentIndex(currentIndex + 1),
    currentIndex < text.length ? delay : null
  );

  // Cursor timer
  useInterval(() => setShowCursor(!showCursor), 500);

  return (
    <div className={styles.typewriter}>
      {text.slice(0, currentIndex)}
      <span className={styles.cursor} style={{ opacity: showCursor ? 1 : 0 }}>
        |
      </span>
    </div>
  );
};

Typewriter.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number
};

Typewriter.defaultProps = {
  text: '',
  delay: 75
};

export default Typewriter;
