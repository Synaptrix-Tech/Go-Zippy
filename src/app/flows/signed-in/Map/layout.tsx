import React from 'react';
import {
  Address,
  ConfirmButtonContainer,
  Container,
  Header,
  HeaderAction,
  Title,
} from './styles';
import { Map } from '@components/Map';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { CaretLeft, Crosshair } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Coords } from '.';
import { Button } from '@components/Button';

type Props = {
  address?: string;
  changePinMarkAddress: (coords: Coords) => Promise<void>;
  loading: boolean;
};

export function MapLayout({ address, changePinMarkAddress, loading }: Props) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderAction>
          <TouchableOpacity onPress={goBack}>
            <CaretLeft size={22} color={colors.ORANGE} weight="bold" />
          </TouchableOpacity>
          <Title>Arrasta o mapa para selecionar o local</Title>
        </HeaderAction>
        {loading ? (
          <ActivityIndicator size={'small'} color={colors.ORANGE} />
        ) : (
          <Address>{address}</Address>
        )}
      </Header>
      <Map
        onChangePin={changePinMarkAddress}
        cords={{
          latitude: -27.5935,
          longitude: -48.55854,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />

      <ConfirmButtonContainer>
        <Button
          title="Confirmar localização"
          icon={<Crosshair size={22} color={colors.WHITE} weight="bold" />}
        />
      </ConfirmButtonContainer>
    </Container>
  );
}
