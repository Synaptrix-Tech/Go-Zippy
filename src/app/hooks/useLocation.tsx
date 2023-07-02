import { useLocationStore } from '@store/locationStore';
import { formatAddress } from '@utils/formatAddress';
import * as Location from 'expo-location';
import { useEffect } from 'react';

export const useLocation = () => {
  const { update } = useLocationStore();
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    return status;
  };

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});

    const permission = await requestLocationPermission();

    if (permission === 'granted') {
      const geocodedLocation = await reverseGeocode(location.coords);
      update(formatAddress(geocodedLocation[0]));
    }
  };

  const reverseGeocode = async (coords: Location.LocationObjectCoords) => {
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
