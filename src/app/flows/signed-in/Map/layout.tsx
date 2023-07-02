import React from 'react';
import { Container, Header, Title } from './styles';
import { Map } from '@components/Map';
import { Text, TouchableOpacity } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export function MapLayout() {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <CaretLeft size={22} color={colors.ORANGE} weight="bold" />
        </TouchableOpacity>
        <Title>Arrasta o mapa para selecionar o local</Title>
      </Header>
      <Map
        cords={{
          latitude: -27.5935,
          longitude: -48.55854,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Container>
  );
}
