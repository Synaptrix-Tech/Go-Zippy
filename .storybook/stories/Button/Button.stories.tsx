import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../src/app/components/Button';
import { Meta } from '@storybook/react-native';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    disabled: false,
    loading: false,
  },
  argTypes: {
    onPress: { action: 'pressed the button' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;
export const Default = {
  args: {
    title: 'Another example',
  },
};
export const Loading = {
  args: {
    title: 'Loading Example',
    loading:true,
  },
};

export const Disabled = {
  args: {
    title: 'Disabled Example',
    disabled:true,
  },
};

