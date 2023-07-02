import React, { useEffect, useState } from 'react';
import { MapLayout } from './layout';
import { useLocation } from '@hooks/useLocation';
import { formatGeoCodeAddress } from '@utils/formatAddress';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

import { LocationGeocodedAddress } from 'expo-location';

export type Coords = {
  latitude: number;
  longitude: number;
};

export type AddressStateType = {
  format: string;
  address: LocationGeocodedAddress;
};

export function Map() {
  const { getLocation, reverseGeocode } = useLocation();
  const [address, setAddress] = useState<AddressStateType | undefined>(
    {} as AddressStateType
  );
  const [loading, setLoading] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const getLocationAddress = async () => {
    const response = await getLocation();

    setAddress({
      address: response.address,
      format: response.format,
    });
  };

  const changePinMarkAddress = async (coords: Coords) => {
    setLoading(loadingStatesEnum.PENDING);
    const geocodeReverseAddress = await reverseGeocode(coords);

    const formattedAddress = formatGeoCodeAddress(geocodeReverseAddress[0]);

    setAddress({
      address: geocodeReverseAddress[0],
      format: formattedAddress,
    });
    setLoading(loadingStatesEnum.STAND_BY);
  };

  useEffect(() => {
    getLocationAddress();
  }, []);

  return (
    <MapLayout
      changePinMarkAddress={changePinMarkAddress}
      address={address?.format}
      loading={loading === loadingStatesEnum.PENDING}
    ></MapLayout>
  );
}
