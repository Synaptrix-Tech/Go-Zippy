import { useLocationStore } from '@store/locationStore';
import { formatAddress, formatGeoCodeAddress } from '@utils/formatAddress';
import * as Location from 'expo-location';
import { useEffect } from 'react';

export const useLocation = () => {
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    return status;
  };

  const getLocation = async (): Promise<{
    format: string;
    address: Location.LocationGeocodedAddress;
  }> => {
    const location = await Location.getCurrentPositionAsync({});

    const permission = await requestLocationPermission();

    if (permission === 'granted') {
      const geocodedLocation = await reverseGeocode(location.coords);
      return {
        format: formatGeoCodeAddress(geocodedLocation[0]),
        address: geocodedLocation[0],
      };
    }

    return {
      format: '',
      address: {} as Location.LocationGeocodedAddress,
    };
  };

  const reverseGeocode = async (
    coords: Pick<Location.LocationObjectCoords, 'longitude' | 'latitude'>
  ) => {
    return await Location.reverseGeocodeAsync(coords);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    requestLocationPermission,
    getLocation,
    reverseGeocode,
  };
};
