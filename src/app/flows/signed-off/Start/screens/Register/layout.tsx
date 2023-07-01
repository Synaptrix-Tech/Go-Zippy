import React from 'react';
import { Container, CustomButton, FormWrapper, Title } from './styles';
import { ControlledInput } from '@components/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterRequestDTO } from '@services/auth/dtos/request/RegisterRequestDTO';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

type Props = {
  handleRegister: (data: RegisterRequestDTO) => Promise<void>;
  requestStates: loadingStates;
};

const RegisterForm = z
  .object({
    name: z.string().refine((data) => data.length > 0, {
      message: 'Nome é obrigatório',
    }),
    email: z.string().email('Email inválido'),
    phone: z.string().min(11, 'Telefone deve ter no mínimo 11 caracteres'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    passwordConfirmation: z
      .string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Senhas não conferem',
    path: ['passwordConfirmation'],
  });

type RegisterForm = z.infer<typeof RegisterForm>;

export function RegisterLayout({ handleRegister, requestStates }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterForm),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    await handleRegister(data);
  };
  return (
    <Container>
      <Title>Create an account</Title>

      <FormWrapper>
        <ControlledInput
          error={errors.name?.message}
          placeholder="Nome"
          control={control}
          name="name"
        />
        <ControlledInput
          error={errors.email?.message}
          placeholder="E-mail"
          control={control}
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <ControlledInput
          placeholder="Telefone"
          control={control}
          name="phone"
          error={errors.phone?.message}
          keyboardType="phone-pad"
        />
        <ControlledInput
          placeholder="Senha"
          control={control}
          name="password"
          passwordType
          error={errors.password?.message}
          autoCapitalize="none"
        />
        <ControlledInput
          placeholder="Confirme sua senha"
          control={control}
          name="passwordConfirmation"
          passwordType
          error={errors.passwordConfirmation?.message}
          onSubmitEditing={handleSubmit(onSubmit)}
          autoCapitalize="none"
        />
      </FormWrapper>
      <CustomButton
        loading={requestStates === loadingStatesEnum.PENDING}
        title="Sign up"
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}
