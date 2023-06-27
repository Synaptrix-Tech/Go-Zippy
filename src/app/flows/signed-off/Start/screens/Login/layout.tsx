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
import { Alert } from '@components/Alert';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

const LoginForm = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof LoginForm>;

type Props = {
  handleLogin: (data: LoginForm) => Promise<void>;
  requestStates: loadingStates;
};

export function LoginLayout({ handleLogin, requestStates }: Props) {
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

  const onSubmit = async (data: LoginForm) => {
    await handleLogin(data);
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
          {requestStates === loadingStatesEnum.ERROR ? (
            <Alert
              type="error"
              message="Credenciais erradas verifique-as e tente novamente."
            />
          ) : null}

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
