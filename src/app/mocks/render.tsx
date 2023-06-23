import React, { ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react-native';

import { AppProviders } from '@providers/index';
export * from '@testing-library/react-native';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <AppProviders>{children}</AppProviders>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
