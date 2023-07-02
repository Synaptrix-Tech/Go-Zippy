import { formatGeoCodeAddress } from '@utils/formatAddress';
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
    coords?: Location.LocationObjectCoords;
  }> => {
    const location = await Location.getCurrentPositionAsync({});

    const permission = await requestLocationPermission();

    if (permission === 'granted') {
      const geocodedLocation = await reverseGeocode(location.coords);
      return {
        format: formatGeoCodeAddress(geocodedLocation[0]),
        address: geocodedLocation[0],
        coords: location.coords,
      };
    }

    return {
      format: '',
      address: {} as Location.LocationGeocodedAddress,
      coords: {} as Location.LocationObjectCoords,
    };
  };

  const getLocationCoords = async () => {
    const location = await Location.getCurrentPositionAsync({});
    return location.coords;
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
    getLocationCoords,
  };
};
