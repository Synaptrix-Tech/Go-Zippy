import { AuthContextProvider } from '@hooks/network/useAuth';
import { theme } from '@styles/themes';
import React, { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
