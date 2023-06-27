import React from 'react';
import { AlertMessage, Container } from './styles';
import { Text } from 'react-native';
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export type AlertType = 'success' | 'error' | 'info' | 'warning';

type Props = {
  type: AlertType;
  message: string;
};

export function Alert({ type, message }: Props) {
  const { colors } = useTheme();
  const renderIcon = () => {
    const size = 20;
    switch (type) {
      case 'success':
        return <CheckCircle size={size} color={colors.GREEN_MAIN} />;
      case 'error':
        return (
          <WarningCircle weight="bold" size={size} color={colors.RED_MID} />
        );
      case 'info':
        return <Info size={size} color={colors.INFO_50} />;
      case 'warning':
        return <Warning size={size} color={colors.YELLOW} />;
      default:
        return null;
    }
  };
  return (
    <Container type={type}>
      {renderIcon()}
      <AlertMessage type={type}>{message}</AlertMessage>
    </Container>
  );
}
