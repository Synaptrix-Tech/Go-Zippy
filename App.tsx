import React, { useEffect } from 'react';
import { AppProviders } from '@providers/index';
import 'react-native-gesture-handler';

import { AppRoutes } from '@routes/index';

import { STORYBOOK_ENABLED } from '@env';
import { useLocation } from '@hooks/useLocation';
function App() {
  const { requestLocationPermission } = useLocation();

  useEffect(() => {
    requestLocationPermission();
  }, []);
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
