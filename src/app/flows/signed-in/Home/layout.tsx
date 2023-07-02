import React, { useRef } from 'react';
import {
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  Container,
} from './styles';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { CaretDown, MagnifyingGlass } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Carousel } from '@components/Carousel';
import { BottomSheet } from '@components/BottomSheet';
import BottomSheetLib from '@gorhom/bottom-sheet';
import { Text, TouchableOpacity, View } from 'react-native';
import { AddressCard } from './components/AddressCard';
import { LocationCard } from './components/LocationCard';

export const HomeLayout = () => {
  const { colors } = useTheme();
  const BottomSheetRef = useRef<BottomSheetLib>(null);

  const onOpenBottomSheet = () => {
    BottomSheetRef.current?.expand();
  };

  const onCloseBottomSheet = () => {
    BottomSheetRef.current?.close();
  };

  return (
    <Container>
      <Header
        cartCount={0}
        notificationCount={0}
        location="1240, Estrada do Rio grande"
        onOpenBottomSheet={onOpenBottomSheet}
      />

      <Input
        placeholder="Search"
        leftIcon={
          <MagnifyingGlass size={16} color={colors.GRAY_TEXT} weight="bold" />
        }
      />
      <Carousel />

      <BottomSheet
        bottomSheetRef={BottomSheetRef}
        snapPoints={['90%']}
        index={-1}
        enablePanDownToClose
        contentHeight={200}
        handleComponent={() => null}
      >
        <BottomSheetContent>
          <BottomSheetHeader>
            <TouchableOpacity onPress={onCloseBottomSheet}>
              <CaretDown size={22} color={colors.ORANGE} weight="bold" />
            </TouchableOpacity>
            <BottomSheetTitle>Endereço de entrega</BottomSheetTitle>
          </BottomSheetHeader>
          <Input
            placeholder="Buscar endereço"
            leftIcon={
              <MagnifyingGlass
                size={16}
                color={colors.GRAY_TEXT}
                weight="bold"
              />
            }
          />
          <LocationCard />
          <AddressCard isSelected={true} />
        </BottomSheetContent>
      </BottomSheet>
    </Container>
  );
};
