import React from 'react';
import { Container, Text } from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  backgroundColor?: string;
  disabled?: boolean;
  title?: string;
  children?: React.ReactNode;
  titleColor?: string;
};

export function Button({
  title,
  backgroundColor,
  children,
  titleColor,
  ...rest
}: ButtonProps) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {title ? <Text color={titleColor}>{title}</Text> : children}
    </Container>
  );
}
