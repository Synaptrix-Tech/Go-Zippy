import { theme } from '@styles/themes';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
