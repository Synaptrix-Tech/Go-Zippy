import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignedOffRoutes } from './SignedOffRoutes';
import { useUserStore } from '@store/userStore';
import { SignedInRoutes } from './SignedInRoutes';

export const AppRoutes = () => {
  const { token } = useUserStore();
  return (
    <NavigationContainer>
      {token ? <SignedInRoutes /> : <SignedOffRoutes />}
    </NavigationContainer>
  );
};
