/**
 * @jest-environment jsdom 
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Timer } from '../index';

describe('Timer', () => {
  it('renders standard Timer', () => {
    const { asFragment } = render(<Timer duration={5} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
