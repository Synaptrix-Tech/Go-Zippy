import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;

  background-color: ${({ theme }) => theme.colors.GRAY_LIGHT};
`;

export const CustomInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.GRAY_TEXT};
  width: 100%;

  padding: 12px;

  flex-shrink: 1;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.RED};
  font-size: 12px;
  margin-top: 4px;
`;
