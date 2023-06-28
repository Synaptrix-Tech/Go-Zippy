import { Button } from '@components/Button';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 350px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 16px;
  width: 100%;
  padding: 32px;
  align-items: center;
  transform: translateY(-20px);
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-top: 8px;
`;

export const FormWrapper = styled.View`
  margin-top: 32px;
  width: 100%;
  padding: 0 16px;

  gap: 16px;
`;

export const CustomButton = styled(Button)`
  margin-top: 32px;
  align-items: center;
`;

export const Footer = styled.View`
  margin-top: 32px;
  gap: 32px;

  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

export const CreateAccountAdviceFooter = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
