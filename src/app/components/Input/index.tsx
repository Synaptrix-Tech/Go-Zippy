import React, { useState } from 'react';
import { Container, CustomInput } from './styles';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { Eye, EyeSlash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export type InputProps = TextInputProps & {
  passwordType?: boolean;
};

export const Input = ({ passwordType = false, ...rest }: InputProps) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Container>
      <CustomInput
        testID="input"
        secureTextEntry={!showPassword && passwordType}
        {...rest}
      />
      {passwordType ? (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={handleChangePasswordVisibility}
        >
          {showPassword ? (
            <Eye size={22} color={colors.GRAY_TEXT} />
          ) : (
            <EyeSlash size={22} color={colors.GRAY} />
          )}
        </TouchableOpacity>
      ) : null}
    </Container>
  );
};
