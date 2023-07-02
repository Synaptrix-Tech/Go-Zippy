import React from 'react';
import { AddressInfo, Container, Content, Title } from './styles';
import { NavigationArrow } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export function LocationCard() {
  const { colors } = useTheme();
  return (
    <Container>
      <NavigationArrow size={24} color={colors.GRAY_MEDIUM} />
      <Content>
        <Title>Usar minha localização</Title>
        <AddressInfo>Estrada do rio grande,868</AddressInfo>
      </Content>
    </Container>
  );
}
