import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignedOffRoutes } from './SignedOffRoutes';

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <SignedOffRoutes />
    </NavigationContainer>
  );
};
