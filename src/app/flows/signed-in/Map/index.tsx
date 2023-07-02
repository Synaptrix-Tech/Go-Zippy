import React, { useEffect, useRef, useState } from 'react';
import { MapLayout } from './layout';
import { useLocation } from '@hooks/useLocation';
import { formatGeoCodeAddress } from '@utils/formatAddress';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

import { LocationGeocodedAddress } from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';

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
    setLoading(loadingStatesEnum.STAND_BY);
  };

  useEffect(() => {
    getLocationAddress();
  }, []);

  return (
    <MapLayout
      changePinMarkAddress={changePinMarkAddress}
      address={address}
      loading={loading === loadingStatesEnum.PENDING}
      requestStates={requestStates}
      bottomSheetRef={bottomSheetRef}
      openBottomSheet={openBottomSheet}
    ></MapLayout>
  );
}
