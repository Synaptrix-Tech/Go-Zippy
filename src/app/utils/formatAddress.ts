import { LocationGeocodedAddress } from 'expo-location';
import { Address } from 'src/model/Address';

export function formatAddress(address: Address) {
  const { street, zipCode, city, country, number, state } = address;
  return `${street}, ${number}, ${zipCode} - ${state}, ${city}, ${country}`;
}

export function formatGeoCodeAddress(address: LocationGeocodedAddress) {
  const { street, postalCode, city, country, streetNumber, region } = address;
  return `${street}, ${streetNumber}, ${postalCode} - ${region}, ${city}, ${country}`;
}
