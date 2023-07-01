import React from 'react';
import { Container } from './styles';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { MagnifyingGlass } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export const HomeLayout = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header
        cartCount={0}
        notificationCount={0}
        location="1240, Estrada do Rio grande"
      />

      <Input
        placeholder="Search"
        leftIcon={
          <MagnifyingGlass size={16} color={colors.GRAY_TEXT} weight="bold" />
        }
      />
    </Container>
  );
};
