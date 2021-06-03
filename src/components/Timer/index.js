import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { calcCircleCircumference, calcStrokeOffset, getComputedValues } from './utils';
import { TimerContainer, TimerSVG, TimerBaseRing, TimerProgressRing } from './styles';

/**
 * Timer Component -
 * Manages Timer display, and lifecycle - start, pause, restart
 * 
 * @param {Number} radius
 * @param {Number} duration
 */

export const Timer = ({ duration, radius = 90 }) => {
  const ref = useRef(null);
  const circumference = calcCircleCircumference(radius);
  const defaultStrokeOffset = calcStrokeOffset(0, circumference);
  const completeStrokeOffset = calcStrokeOffset(100, circumference);

  // Timer lifecycle states
  const [running, setRunning] = useState(false);
  const reset = useRef(false);

  // Timer display states
  const [remainingDuration, setRemainingDuration] = useState(duration);
  const [strokeOffset, setStrokeOffset] = useState(defaultStrokeOffset);

  // Pause the timer
  const pauseTimer = () => {
    const { offset, secondsRemaining } = getComputedValues(ref.current, circumference, duration);
    setRunning(false);
    setStrokeOffset(offset);
    setRemainingDuration(secondsRemaining);
  };

  // Reset the timer
  const resetTimer = () => {
    reset.current = true;
    setRunning(false);
    setStrokeOffset(defaultStrokeOffset);
    setRemainingDuration(duration);
  };

  // Click handler for timer
  const handleClick = useCallback(() => {
    const { secondsRemaining } = getComputedValues(ref.current, circumference, duration);
    const isComplete = !Boolean(secondsRemaining);
    const isStart = secondsRemaining >= duration;

    // Start if not started
    if (!running && !reset.current) {
      setRunning(true);
    
    // Start if not started
    } else if (!running && isStart) {
      reset.current = false;
      setRunning(true);

    // Pause if running
    } else if (running && !isComplete && !reset.current) {
      pauseTimer();

    // Restart if complete
    } else if (isComplete) {
      resetTimer();
    }
  });

  useEffect(() => {
    if (running && !reset.current) {
      setStrokeOffset(completeStrokeOffset);
    }
  }, [running]);

  return (
    <TimerContainer>
      <TimerSVG viewport="0 0 100 100" onClick={handleClick}>
        <TimerBaseRing r={radius} />
        <TimerProgressRing
          ref={ref}
          r={radius}
          running={running}
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
          remainingDuration={remainingDuration}
        />
      </TimerSVG>
    </TimerContainer>
  );
};

Timer.propTypes = {
  radius: PropTypes.number,
  duration: PropTypes.number.isRequired,
};
