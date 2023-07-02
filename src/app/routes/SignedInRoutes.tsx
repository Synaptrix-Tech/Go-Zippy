import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RoutesEnum } from './routes';
import { Home } from '@flows/signed-in/Home';
import { Map } from '@flows/signed-in/Map';
const { Screen, Navigator } = createStackNavigator();

export const SignedInRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={RoutesEnum.HOME} component={Home} />
      <Screen name={RoutesEnum.MAP} component={Map} />
    </Navigator>
  );
};
