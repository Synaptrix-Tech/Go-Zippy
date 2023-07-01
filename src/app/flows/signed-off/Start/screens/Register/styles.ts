import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@components/Button';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 32px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
`;

export const FormWrapper = styled.View`
  margin-top: 32px;
  gap: 16px;
`;

export const CustomButton = styled(Button)`
  margin-top: 64px;
`;
