import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 32px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  margin-bottom: 8px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
`;

export const AddressInfo = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_MEDIUM};
`;
