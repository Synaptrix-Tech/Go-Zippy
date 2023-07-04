import React, { useState } from 'react';
import {
  Address,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetSubtitle,
  BottomSheetTitle,
  ConfirmButtonContainer,
  Container,
  CustomButton,
  Header,
  HeaderAction,
  InputsWrapper,
  InputsWrapperTitle,
  Title,
} from './styles';
import { Map } from '@components/Map';
import { ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { AddressStateType, Coords } from '.';
import { Button } from '@components/Button';
import { loadingStates, loadingStatesEnum } from '@ts/loading';
import { BottomSheet } from '@components/BottomSheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Input } from '@components/Input';

type Props = {
  address: AddressStateType | undefined;
  changePinMarkAddress: (coords: Coords) => Promise<void>;
  loading: boolean;
  requestStates: loadingStates;
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  openBottomSheet: () => void;
  formValues: {
    number: string;
    complement: string;
  };
  handleChangeFormValues: (key: string, value: string) => void;
  createAddress: () => Promise<void>;
};

export function MapLayout({
  address,
  changePinMarkAddress,
  loading,
  requestStates,
  bottomSheetRef,
  openBottomSheet,
  formValues,
  handleChangeFormValues,
  createAddress,
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
            <Button
              onPress={openBottomSheet}
              loading={loading}
              disabled={loading}
              title="Continuar"
            />
          </ConfirmButtonContainer>

          <BottomSheet
            bottomSheetRef={bottomSheetRef}
            index={-1}
            snapPoints={['100%']}
            containerStyle={{
              zIndex: 2,
            }}
            enablePanDownToClose
          >
            <BottomSheetContainer>
              <Image
                style={{
                  width: '100%',
                  height: 200,
                }}
                source={{
                  uri: `https://maps.googleapis.com/maps/api/staticmap?center=${address?.coords?.latitude},${address?.coords?.longitude}&zoom=15&size=400x200&&markers=color:red%7C${address?.coords?.latitude},${address?.coords?.longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
                }}
              />
              <BottomSheetContent>
                <BottomSheetTitle>
                  {address?.address?.street}, {address?.address?.streetNumber}
                </BottomSheetTitle>
                <BottomSheetSubtitle>
                  {address?.address?.district}, {address?.address?.city},{' '}
                  {address?.address?.region}
                </BottomSheetSubtitle>
                <InputsWrapper>
                  <InputsWrapperTitle>Número e complemento</InputsWrapperTitle>
                  <Input
                    style={{ flex: 1 }}
                    placeholder="Número"
                    value={formValues.number || ''}
                    onChangeText={(text) =>
                      handleChangeFormValues('number', text)
                    }
                  />
                  <Input
                    style={{ flex: 1 }}
                    placeholder="Complemento"
                    value={formValues.complement}
                    onChangeText={(text) =>
                      handleChangeFormValues('complement', text)
                    }
                  />
                </InputsWrapper>

                <CustomButton
                  onPress={createAddress}
                  title="Criar endereço"
                  loading={requestStates === loadingStatesEnum.PENDING}
                />
              </BottomSheetContent>
            </BottomSheetContainer>
          </BottomSheet>
        </>
      ) : (
        <ActivityIndicator size={'large'} color={colors.ORANGE} />
      )}
    </Container>
  );
}
