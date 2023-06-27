import styled from 'styled-components/native';
import { AlertType } from '.';

type ContainerProps = {
  type: AlertType;
};

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'error':
        return theme.colors.RED_LIGHT;
      case 'info':
        return theme.colors.INFO_LIGHT;
      case 'success':
        return theme.colors.GREEN_LIGHT;
      case 'warning':
        return theme.colors.YELLOW_LIGHT;
      default:
        return theme.colors.WHITE;
    }
  }};

  border-radius: 6px;
  padding: 12px;
`;

export const AlertMessage = styled.Text<ContainerProps>`
  color: ${({ theme, type }) => {
    switch (type) {
      case 'error':
        return theme.colors.RED_ERROR_TEXT;
      case 'info':
        return theme.colors.INFO;
      case 'success':
        return theme.colors.GREEN_DARK;
      case 'warning':
        return theme.colors.YELLOW;
      default:
        return theme.colors.WHITE;
    }
  }};

  flex-shrink: 1;

  font-size: 14px;
`;
