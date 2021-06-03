import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Timer } from './components/Timer';

/**
 * Timer Application
 * 
 * @param {Number} duration 
 */
const TimerApplication = ({ duration = 5 }) => {
  const durationInSeconds = duration * 60;

  return (
    <Timer duration={durationInSeconds} />
  );
};

TimerApplication.propTypes = {
  duration: PropTypes.number,
};

ReactDOM.render(<TimerApplication />, document.querySelector('body'));
