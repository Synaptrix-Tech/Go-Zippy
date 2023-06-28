import React from 'react';
import { AlertMessage, Container } from './styles';
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

export type AlertType = 'success' | 'error' | 'info' | 'warning';

export type Props = {
  type: AlertType;
  message: string;
};

export function Alert({ type, message }: Props) {
  const { colors } = useTheme();
  const renderIcon = () => {
    const size = 20;
    switch (type) {
      case 'success':
        return (
          <View testID="success-icon">
            <CheckCircle size={size} color={colors.GREEN_MAIN} />
          </View>
        );
      case 'error':
        return (
          <View testID="error-icon">
            <WarningCircle weight="bold" size={size} color={colors.RED_MID} />
          </View>
        );
      case 'info':
        return (
          <View testID="info-icon">
            <Info size={size} color={colors.INFO_50} />
          </View>
        );
      case 'warning':
        return (
          <View testID="warning-icon">
            <Warning size={size} color={colors.YELLOW} />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <Container type={type} testID="alert-box">
      {renderIcon()}
      <AlertMessage type={type} testID="alert-text">
        {message}
      </AlertMessage>
    </Container>
  );
}
