import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RoutesEnum } from '@routes/routes';
import { Start } from '.';
import { Login } from './screens/Login';
import { Register } from './screens/Register';

const { Screen, Navigator } = createStackNavigator();

type AppRoutes = {
  [RoutesEnum.LOGIN]: undefined;
  [RoutesEnum.START]: undefined;
  [RoutesEnum.REGISTER]: undefined;
};

export type StartNavigatorProps = StackNavigationProp<AppRoutes>;

export const StartNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={RoutesEnum.START} component={Start} />
      <Screen name={RoutesEnum.LOGIN} component={Login} />
      <Screen name={RoutesEnum.REGISTER} component={Register} />
    </Navigator>
  );
};
