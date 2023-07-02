import React from 'react';
import { AddressInfo, Container, Content, Title } from './styles';
import { NavigationArrow } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useLocation } from '@hooks/useLocation';
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '@routes/routes';

export function LocationCard() {
  const { colors } = useTheme();
  const { getLocation } = useLocation();

  const { navigate } = useNavigation<any>();

  const goToMap = () => {
    navigate(RoutesEnum.MAP);
  };
  return (
    <Container onPress={goToMap}>
      <NavigationArrow size={24} color={colors.GRAY_MEDIUM} />
      <Content>
        <Title>Usar minha localização</Title>
        <AddressInfo></AddressInfo>
      </Content>
    </Container>
  );
}
