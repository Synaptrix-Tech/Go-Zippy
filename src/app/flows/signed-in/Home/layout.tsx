import React from 'react';
import { Container } from './styles';
import { Header } from '@components/Header';

export const HomeLayout = () => {
  return (
    <Container>
      <Header
        cartCount={2}
        notificationCount={2}
        location="1240, Estrada do Rio grande"
      />
    </Container>
  );
};
