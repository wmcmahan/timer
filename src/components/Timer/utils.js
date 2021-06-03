/**
 * Calculate the circumference of circle
 * C = 2πr
 * @param {Number} radius
 */
export const calcCircleCircumference = (radius) => {
  if (typeof radius !== 'number') {
    throw new Error('Enter valid radius.');
  }
  return 2 * Math.PI * Number(radius);
};

/**
 * Calculate the stroke offset for a given size and percentage
 * @param {Number} percentage
 * @param {Number} circumference
 */
export const calcStrokeOffset = (percentage, circumference) => {
  if (typeof percentage !== 'number') {
    throw new Error('Enter valid percentage.');
  }
  if (typeof circumference !== 'number') {
    throw new Error('Enter valid circumference.');
  }
  return ((100 - Number(percentage)) / 100) * Number(circumference);
};

/**
 * Calculate seconds remaining from stroke offset
 * @param {Number} offset
 * @param {Number} circumference
 */
export const calcSecondsRemaining = (offset, circumference, duration) => {
  if (typeof offset !== 'number') {
    throw new Error('Enter valid offset.');
  }
  if (typeof circumference !== 'number') {
    throw new Error('Enter valid circumference.');
  }
  if (typeof duration !== 'number') {
    throw new Error('Enter valid duration.');
  }
  const percentageComplete = (1 - (Number(offset) / Number(circumference)));
  const remainingTime = (1 - percentageComplete) * Number(duration);
  return remainingTime;
};

/**
 * Get timer current state in time
 * @param {Object} ref
 * @param {Number} circumference
 * @param {Number} duration
 */
export const getComputedValues = (ref, circumference, duration) => {
  if (typeof circumference !== 'number') {
    throw new Error('Enter valid circumference.');
  }
  if (typeof duration !== 'number') {
    throw new Error('Enter valid circumference.');
  }
  const computedStyles = window.getComputedStyle(ref);
  const offset = computedStyles.getPropertyValue('stroke-dashoffset').replace('px', '');
  const secondsRemaining = calcSecondsRemaining(Number(offset), circumference, duration);
  return { offset, secondsRemaining };
}
