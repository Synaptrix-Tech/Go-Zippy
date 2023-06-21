import styled from 'styled-components/native';

type ContainerProps = {
  backgroundColor?: string;
  disabled?: boolean;
};

type TextProps = {
  color?: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ theme, backgroundColor, disabled }) =>
    !disabled
      ? backgroundColor
        ? backgroundColor
        : theme.colors.ORANGE
      : theme.colors.GRAY};
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ theme, color }) => (!color ? theme.colors.WHITE : color)};
  font-size: 16px;
  font-weight: bold;
`;
