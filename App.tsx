import { AppProviders } from '@providers/index';
import React from 'react';

import { STORYBOOK_ENABLED } from '@env';
import { Login } from '@flows/signed-off/Start/screens/Login';

function App() {
  return (
    <AppProviders>
      <Login />
    </AppProviders>
  );
}

let AppEntryPoint = App;

if (STORYBOOK_ENABLED === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
