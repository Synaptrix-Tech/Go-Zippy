import React from 'react';
import { AddressInfo, Container, Content, Title } from './styles';
import { NavigationArrow } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useLocation } from '@hooks/useLocation';

type Props = {
  location?: string;
};

export function LocationCard({ location }: Props) {
  const { colors } = useTheme();
  const { getLocation } = useLocation();
  return (
    <Container onPress={getLocation}>
      <NavigationArrow size={24} color={colors.GRAY_MEDIUM} />
      <Content>
        <Title>Usar minha localização</Title>
        <AddressInfo>{location}</AddressInfo>
      </Content>
    </Container>
  );
}
