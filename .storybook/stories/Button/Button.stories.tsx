import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../src/app/components/Button';
import { Meta } from '@storybook/react-native';
import { Trash } from 'phosphor-react-native';

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
    titleColor: { control: 'color' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    variation: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outline', 'ghost'],
    },
    leftIcon: { control: 'boolean' },
    textBold: { control: 'boolean' },
    fontSize: { control: 'number' },
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
    loading: true,
  },
};

export const Outlined = {
  args: {
    title: 'Outlined',
    variation: 'outline',
    titleColor: '#000',
  },
};
export const Ghost = {
  args: {
    title: 'Ghost',
    variation: 'ghost',
    titleColor: '#000',
  },
};

export const Disabled = {
  args: {
    title: 'Disabled Example',
    disabled: true,
  },
};

export const Icon = {
  args: {
    title: 'Icon Example',
    disabled: true,
    icon: <Trash size={16} color="#FFF" weight="bold" />,
  },
};
