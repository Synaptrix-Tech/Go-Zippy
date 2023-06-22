import styled from 'styled-components/native';
import { ButtonVariation } from '.';

type ContainerProps = {
  backgroundColor?: string;
  disabled?: boolean;
  variation?: ButtonVariation;
};

type TextProps = {
  color?: string;
};

type Content = {
  leftIcon?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ theme, backgroundColor, disabled, variation }) =>
    !disabled
      ? variation === 'outline'
        ? 'transparent'
        : backgroundColor
        ? backgroundColor
        : theme.colors.ORANGE
      : theme.colors.GRAY};
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  border-width: ${({ variation }) => (variation === 'outline' ? 1 : 0)}px;
  border-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.ORANGE};
`;

export const Text = styled.Text<TextProps>`
  color: ${({ theme, color }) => (!color ? theme.colors.WHITE : color)};
  font-size: 16px;
  font-weight: bold;
`;

export const Content = styled.View<Content>`
  flex-direction: ${({ leftIcon }) => (leftIcon ? 'row-reverse' : 'row')};

  align-items: center;
  gap: 8px;
`;
