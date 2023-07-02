import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StartNavigator } from '@flows/signed-off/Start/navigator';
import { NavigatorsEnum } from './routes';
const { Screen, Navigator } = createStackNavigator();

export const SignedOffRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={NavigatorsEnum.START_NAVIGATOR}
        component={StartNavigator}
      />
    </Navigator>
  );
};
