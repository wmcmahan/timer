/**
 * @jest-environment jsdom 
 */
import { calcCircleCircumference, calcStrokeOffset, calcSecondsRemaining } from '../utils';

describe('calcCircleCircumference', () => {
  const radius = 5;

  it('calculate circumference', () => {
    expect(calcCircleCircumference(radius)).toEqual(31.41592653589793);
  });
  
  it('throw if not a valid radius', () => {
    expect(() => calcCircleCircumference('hi')).toThrowError('Enter valid radius.');
  });
});

describe('calcStrokeOffset', () => {
  const percentage = 90;
  const circumference = 90;

  it('calculate stroke offset for svg circle', () => {
    expect(calcStrokeOffset(percentage, circumference)).toEqual(9);
  });
  
  it('throw if not a valid percentage', () => {
    expect(() => calcStrokeOffset('hi', circumference)).toThrowError('Enter valid percentage.');
  });

  it('throw if not a valid circumference', () => {
    expect(() => calcStrokeOffset(percentage, 'hi')).toThrowError('Enter valid circumference.');
  });
});

describe('calcSecondsRemaining', () => {
  const offset = 0;
  const circumference = 90;
  const duration = 300;

  it('calculate stroke offset for svg circle', () => {
    expect(calcSecondsRemaining(offset, circumference, duration)).toEqual(0);
  });
  
  it('throw if not a valid offset', () => {
    expect(() => calcSecondsRemaining('hi', circumference, duration)).toThrowError('Enter valid offset.');
  });

  it('throw if not a valid circumference', () => {
    expect(() => calcSecondsRemaining(offset, 'hi', duration)).toThrowError('Enter valid circumference.');
  });

  it('throw if not a valid duration', () => {
    expect(() => calcSecondsRemaining(offset, circumference, 'hi')).toThrowError('Enter valid duration.');
  });
});
