import React from 'react';
import { View } from 'react-native';
import { Input } from '../../../src/app/components/Input';
import { Meta } from '@storybook/react-native';

const InputMeta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: {
    passwordType: false,
  },
  argTypes: {
    onChangeText: { action: 'changed text' },
    passwordType: { control: 'boolean' },
    placeholder: { control: 'text' },
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

export const Default = {
  args: {
    passwordType: false,
    placeholder: 'Email',
  },
};
