import React from 'react';
import { AppProviders } from '@providers/index';
import 'react-native-gesture-handler';

import { AppRoutes } from '@routes/index';

import { STORYBOOK_ENABLED } from '@env';

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

let AppEntryPoint = App;

if (STORYBOOK_ENABLED === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
