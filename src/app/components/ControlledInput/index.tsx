import React from 'react';
import { ErrorMessage } from './styles';
import { Controller } from 'react-hook-form';
import { Input, InputProps } from '@components/Input';

export type ControlledInputProps = InputProps & {
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
}: ControlledInputProps) => {
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
