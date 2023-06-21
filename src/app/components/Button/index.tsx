import React from 'react';
import { Container, Text } from './styles';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  backgroundColor?: string;
  disabled?: boolean;
  title?: string;
  children?: React.ReactNode;
  titleColor?: string;
  loading?: boolean;
};

export function Button({
  title,
  backgroundColor,
  children,
  titleColor,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {
        loading ? (
          <ActivityIndicator size="small" color="#f3f"  />
        ) : (
          <>
            {title ? <Text color={titleColor}>{title}</Text> : children}
          </>

        )
      }
    </Container>
  );
}
