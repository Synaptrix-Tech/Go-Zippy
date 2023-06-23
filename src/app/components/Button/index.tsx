import React from 'react';
import { Container, Content, Text } from './styles';
import { TouchableOpacityProps, ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export type ButtonVariation = 'contained' | 'outline';

export type ButtonProps = TouchableOpacityProps & {
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
      accessibilityRole="button"
      variation={variation}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          testID="loading-indicator"
          size="small"
          color={colors.WHITE}
        />
      ) : (
        <Content leftIcon={leftIcon} testID="content-container">
          {title ? <Text color={titleColor}>{title}</Text> : children}
          {icon ? <View testID="icon-container">{icon}</View> : null}
        </Content>
      )}
    </Container>
  );
}
