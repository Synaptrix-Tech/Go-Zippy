import React from 'react';
import { render } from '@testing-library/react-native';
import { Button, ButtonVariation } from '.';
import { AppProviders } from '@providers/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/themes';

const makeSut = (
  disabled = false,
  backgroundColor = '#000',
  loading = false,
  title = 'button',
  variation = 'contained' as ButtonVariation
) => {
  const props = {
    disabled,
    backgroundColor,
    loading,
    title,
    variation,
  };
  return render(<Button {...props} />, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
};

describe('Button Component', () => {
  it('should be render with the selected color', () => {
    const { debug } = makeSut();

    console.log(debug());
  });
});
