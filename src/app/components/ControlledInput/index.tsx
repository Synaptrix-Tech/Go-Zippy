import React from 'react';
import { ErrorMessage } from './styles';
import { TextInputProps } from 'react-native';
import { Controller } from 'react-hook-form';
import { Input } from '@components/Input';

export type InputProps = TextInputProps & {
  passwordType?: boolean;
  name: string;
  control: any;
  error?: string;
};

export const ControlledInput = ({
  passwordType = false,
  control,
  name,
  error,
  ...rest
}: InputProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            passwordType={passwordType}
            {...rest}
          />
        )}
      />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};
