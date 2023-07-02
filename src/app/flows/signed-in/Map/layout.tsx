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
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { AddressStateType, Coords } from '.';
import { Button } from '@components/Button';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

type Props = {
  address: AddressStateType | undefined;
  changePinMarkAddress: (coords: Coords) => Promise<void>;
  loading: boolean;
  requestStates: loadingStates;
};

export function MapLayout({
  address,
  changePinMarkAddress,
  loading,
  requestStates,
}: Props) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      {requestStates !== loadingStatesEnum.PENDING ? (
        <>
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
              <Address>{address?.format}</Address>
            )}
          </Header>

          <Map
            onChangePin={changePinMarkAddress}
            cords={{
              latitude: address?.coords?.latitude || 0,
              longitude: address?.coords?.longitude || 0,
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          />

          <ConfirmButtonContainer>
            <Button loading={loading} disabled={loading} title="Continuar" />
          </ConfirmButtonContainer>
        </>
      ) : (
        <ActivityIndicator size={'large'} color={colors.ORANGE} />
      )}
    </Container>
  );
}
