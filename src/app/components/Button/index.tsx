import React from 'react';
import { Container, Content, Text } from './styles';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export type ButtonVariation = 'contained' | 'outline';

type ButtonProps = TouchableOpacityProps & {
  backgroundColor?: string;
  disabled?: boolean;
  title?: string;
  children?: React.ReactNode;
  titleColor?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  leftIcon?: boolean;
  variation?: ButtonVariation;
};

export function Button({
  title,
  backgroundColor,
  children,
  titleColor,
  loading,
  icon,
  leftIcon = false,
  variation = 'contained',
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();
  return (
    <Container
      variation={variation}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.WHITE} />
      ) : (
        <Content leftIcon={leftIcon}>
          {title ? <Text color={titleColor}>{title}</Text> : children}
          {icon ? icon : null}
        </Content>
      )}
    </Container>
  );
}
