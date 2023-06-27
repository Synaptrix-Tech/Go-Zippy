import { AuthContextProvider } from '@hooks/network/useAuth';
import { theme } from '@styles/themes';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeProvider>
  );
};
