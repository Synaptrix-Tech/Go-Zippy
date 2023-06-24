import React, { useState } from 'react';
import { Container, CustomInput, ErrorMessage } from './styles';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { Eye, EyeSlash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Controller } from 'react-hook-form';

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
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Container>
            <CustomInput
              secureTextEntry={!showPassword && passwordType}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
            {passwordType ? (
              <TouchableOpacity onPress={handleChangePasswordVisibility}>
                {showPassword ? (
                  <Eye size={22} color={colors.GRAY_TEXT} />
                ) : (
                  <EyeSlash size={22} color={colors.GRAY} />
                )}
              </TouchableOpacity>
            ) : null}
          </Container>
        )}
      />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};
