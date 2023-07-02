import React from 'react';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';
import { useLocation } from '@hooks/useLocation';
import { formatGeoCodeAddress } from '@utils/formatAddress';

type Coords = {
  latitude: number;
  longitude: number;
};

type Props = {
  cords: Coords;
  style?: StyleProp<ViewStyle>;
  onChangePin: (coords: Coords) => void;
};

export function Map({ cords, style, onChangePin }: Props) {
  const [region, setRegion] = React.useState({
    latitude: cords?.latitude,
    longitude: cords?.longitude,
  });

  const onChangeCoords = async (coords: LatLng) => {
    setRegion(coords);
    onChangePin(coords);
  };

  return (
    <MapView
      style={style}
      onPress={(event) => onChangeCoords(event.nativeEvent.coordinate)}
      initialRegion={{
        latitude: cords?.latitude,
        longitude: cords?.longitude,
        latitudeDelta: 0.00457,
        longitudeDelta: 0.006866,
      }}
    >
      <Marker coordinate={region} />
    </MapView>
  );
}
