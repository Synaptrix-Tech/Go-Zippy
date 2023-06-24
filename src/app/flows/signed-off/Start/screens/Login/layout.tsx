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
import { Button } from '@components/Button';
import { useTheme } from 'styled-components/native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledInput } from '@components/ControlledInput';
import { View } from 'react-native';

const LoginForm = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof LoginForm>;

export function LoginLayout() {
  const { colors } = useTheme();
  const {
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(LoginForm),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <Container>
      <Image source={Img} />
      <Content>
        <Title>Welcome Back</Title>
        <Text>Login to your account</Text>

        <FormWrapper>
          <View>
            <ControlledInput
              control={control}
              name="email"
              placeholder="Email"
              error={errors.email?.message}
            />
          </View>
          <View>
            <ControlledInput
              control={control}
              name="password"
              placeholder="Password"
              passwordType
              error={errors.password?.message}
            />
          </View>

          <CustomButton
            title="Login"
            onPress={handleSubmit(onSubmit)}
            loading={isSubmitting}
          />
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
