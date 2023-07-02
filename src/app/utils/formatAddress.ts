import { LocationGeocodedAddress } from 'expo-location';

export function formatAddress(address: LocationGeocodedAddress) {
  const { name, street, postalCode, city, country } = address;
  return `${name}, ${street}, ${postalCode} ${city}, ${country}`;
}
