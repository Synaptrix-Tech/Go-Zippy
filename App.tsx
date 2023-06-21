export { default } from './.storybook';
import { AppProviders } from '@providers/index';
import React from 'react';
import { View } from 'react-native';

export function App() {
  return (
    <AppProviders>
      <View></View>
    </AppProviders>
  );
}
