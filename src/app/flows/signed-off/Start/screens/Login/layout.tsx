import React from 'react';
import {
  Container,
  Content,
  CreateAccountAdviceFooter,
  CustomButton,
  Footer,
  FooterText,
  FormWrapper,
  Image,
  Text,
  Title,
} from './styles';
import Img from '@assets/signin.jpg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useTheme } from 'styled-components/native';

export function LoginLayout() {
  const { colors } = useTheme();
  return (
    <Container>
      <Image source={Img} />
      <Content>
        <Title>Welcome Back</Title>
        <Text>Login to your account</Text>

        <FormWrapper>
          <Input placeholder="Email" />
          <Input placeholder="Password" passwordType />

          <CustomButton title="Login" />
        </FormWrapper>

        <Footer>
          <Button
            variation="ghost"
            title="Forgot your password?"
            titleColor={colors.GRAY_DARK}
            textBold={false}
          />
          <CreateAccountAdviceFooter>
            <FooterText>Don't have an account?</FooterText>
            <Button
              variation="ghost"
              title="Sign up"
              titleColor={colors.ORANGE}
              fontSize={12}
            />
          </CreateAccountAdviceFooter>
        </Footer>
      </Content>
    </Container>
  );
}
