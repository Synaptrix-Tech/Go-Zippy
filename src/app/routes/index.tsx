import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignedOffRoutes } from './SignedOffRoutes';
import { useUserStore } from '@store/userStore';
import { Home } from '@flows/signed-in/Home';

export const AppRoutes = () => {
  const { token } = useUserStore();
  return (
    <NavigationContainer>
      {token ? <Home /> : <SignedOffRoutes />}
    </NavigationContainer>
  );
};
