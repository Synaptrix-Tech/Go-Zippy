import React from 'react';
import App from '../App';

import { render } from '@testing-library/react-native';

describe('Should be render App', () => {
  it('Should be render App', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
