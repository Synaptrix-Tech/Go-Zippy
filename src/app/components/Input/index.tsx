import React, { useState } from 'react';
import { Container, CustomInput } from './styles';
import { TextInputProps, TouchableOpacity, View } from 'react-native';
import { Eye, EyeSlash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export type InputProps = TextInputProps & {
  passwordType?: boolean;
  leftIcon?: React.ReactNode;
};

export const Input = ({
  passwordType = false,
  leftIcon,
  ...rest
}: InputProps) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Container>
      {leftIcon ? <View testID="left-icon"> {leftIcon}</View> : null}
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
