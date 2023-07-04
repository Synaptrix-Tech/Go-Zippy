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
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { AddressCard } from './components/AddressCard';
import { LocationCard } from './components/LocationCard';
import { Address } from 'src/model/Address';
import { formatAddress } from '@utils/formatAddress';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

type Props = {
  addressList: Address[];
  selectedAddress?: Address;
  requestState: loadingStates;
};

export const HomeLayout = ({
  addressList,
  selectedAddress,
  requestState,
}: Props) => {
  const { colors } = useTheme();
  const BottomSheetRef = useRef<BottomSheetLib>(null);

  const onOpenBottomSheet = async () => {
    BottomSheetRef.current?.expand();
  };

  const onCloseBottomSheet = () => {
    BottomSheetRef.current?.close();
  };

  const location = selectedAddress?.city
    ? formatAddress(selectedAddress)
    : 'Selecionar endereço';

  return (
    <Container>
      {requestState === loadingStatesEnum.PENDING ? (
        <ActivityIndicator size={'small'} color={colors.ORANGE} />
      ) : (
        <>
          <Header
            cartCount={0}
            notificationCount={0}
            location={location}
            onOpenBottomSheet={onOpenBottomSheet}
          />

          <Input
            placeholder="Search"
            leftIcon={
              <MagnifyingGlass
                size={16}
                color={colors.GRAY_TEXT}
                weight="bold"
              />
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
              <>
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
                <FlatList
                  style={{
                    flex: 1,
                  }}
                  contentContainerStyle={{
                    flex: 1,
                    paddingBottom: 20,
                  }}
                  data={addressList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <AddressCard address={item} />}
                />
              </>
            </BottomSheetContent>
          </BottomSheet>
        </>
      )}
    </Container>
  );
};
