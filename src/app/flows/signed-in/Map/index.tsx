import React, { useEffect, useRef, useState } from 'react';
import { MapLayout } from './layout';
import { useLocation } from '@hooks/useLocation';
import { formatGeoCodeAddress } from '@utils/formatAddress';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

import { LocationGeocodedAddress } from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';
import { AddressService } from '@services/Address';
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '@routes/routes';

export type Coords = {
  latitude: number;
  longitude: number;
};

export type AddressStateType = {
  format: string;
  address: LocationGeocodedAddress;
  coords?: Coords;
};

export function Map() {
  const { getLocation, reverseGeocode } = useLocation();
  const [address, setAddress] = useState<AddressStateType | undefined>(
    {} as AddressStateType
  );
  const [formValues, setFormValues] = useState({
    number: '',
    complement: '',
  });

  const { reset } = useNavigation<any>();
  const addressService = new AddressService();

  const handleChangeFormValues = (key: string, value: string) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [requestStates, setRequestStates] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const [loading, setLoading] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const getLocationAddress = async () => {
    setRequestStates(loadingStatesEnum.PENDING);
    const response = await getLocation();

    handleChangeFormValues('number', response.address.streetNumber || '');

    setAddress({
      address: response.address,
      format: response.format,
      coords: {
        latitude: response.coords?.latitude || 0,
        longitude: response.coords?.longitude || 0,
      },
    });
    setRequestStates(loadingStatesEnum.DONE);
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const changePinMarkAddress = async (coords: Coords) => {
    setLoading(loadingStatesEnum.PENDING);
    const geocodeReverseAddress = await reverseGeocode(coords);

    const formattedAddress = formatGeoCodeAddress(geocodeReverseAddress[0]);

    setAddress({
      address: geocodeReverseAddress[0],
      format: formattedAddress,
      coords: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    });
    handleChangeFormValues(
      'number',
      geocodeReverseAddress[0].streetNumber || ''
    );
    setLoading(loadingStatesEnum.STAND_BY);
  };

  useEffect(() => {
    getLocationAddress();
  }, []);

  const createAddress = async () => {
    try {
      setRequestStates(loadingStatesEnum.PENDING);
      const response = await addressService.addAddress({
        street: address?.address.street || '',
        city: address?.address.city || '',
        state: address?.address.region || '',
        country: address?.address.country || '',
        zipCode: address?.address.postalCode || '',
        number: formValues.number,
        complement: formValues.complement,
      });
      setRequestStates(loadingStatesEnum.DONE);

      reset({
        routes: [{ name: RoutesEnum.HOME }],
        index: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MapLayout
      changePinMarkAddress={changePinMarkAddress}
      address={address}
      loading={loading === loadingStatesEnum.PENDING}
      requestStates={requestStates}
      bottomSheetRef={bottomSheetRef}
      openBottomSheet={openBottomSheet}
      formValues={formValues}
      handleChangeFormValues={handleChangeFormValues}
      createAddress={createAddress}
    ></MapLayout>
  );
}
