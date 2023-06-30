import React from 'react';
import { Container, CustomButton, FormWrapper, Title } from './styles';
import { ControlledInput } from '@components/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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

export function RegisterLayout() {
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

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
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
        />
        <ControlledInput
          placeholder="Telefone"
          control={control}
          name="phone"
          error={errors.phone?.message}
        />
        <ControlledInput
          placeholder="Senha"
          control={control}
          name="password"
          passwordType
          error={errors.password?.message}
        />
        <ControlledInput
          placeholder="Confirme sua senha"
          control={control}
          name="passwordConfirmation"
          passwordType
          error={errors.passwordConfirmation?.message}
        />
      </FormWrapper>
      <CustomButton title="Sign up" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
}
