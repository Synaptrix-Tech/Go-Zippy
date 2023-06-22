import { AppProviders } from '@providers/index';
import React from 'react';

import { STORYBOOK_ENABLED } from '@env';
import { Start } from '@flows/signed-off/Start';

function App() {
  return (
    <AppProviders>
      <Start />
    </AppProviders>
  );
}

let AppEntryPoint = App;

if (STORYBOOK_ENABLED === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
