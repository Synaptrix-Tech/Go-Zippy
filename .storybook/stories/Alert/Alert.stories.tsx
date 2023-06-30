import React from 'react';
import { View } from 'react-native';
import { Alert, AlertType } from '../../../src/app/components/Alert';
import { Meta } from '@storybook/react-native';

const AlertMeta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  args: {
    message: 'Another example',
    type: 'success' as AlertType,
  },
  argTypes: {
    message: { control: 'text' },
    type: {
      control: {
        type: 'radio',
      },
      options: ['success', 'error', 'info', 'warning'],
    },
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default AlertMeta;
export const Default = {
  args: {
    message: 'Another example',
    type: 'success' as AlertType,
  },
};
export const Error = {
  args: {
    message: 'Another example',
    type: 'error' as AlertType,
  },
};

export const Info = {
  args: {
    message: 'Another example',
    type: 'info' as AlertType,
  },
};

export const Warning = {
  args: {
    message: 'Another example',
    type: 'warning' as AlertType,
  },
};
