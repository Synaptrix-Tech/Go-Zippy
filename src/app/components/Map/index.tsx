import React from 'react';
import MapView, { LatLng, Marker, MapViewProps } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';

type Coords = {
  latitude: number;
  longitude: number;
};

type Props = MapViewProps & {
  cords: Coords;
  style?: StyleProp<ViewStyle>;
  onChangePin?: (coords: Coords) => void;
};

export function Map({ cords, style, onChangePin }: Props) {
  const [region, setRegion] = React.useState({
    latitude: cords?.latitude,
    longitude: cords?.longitude,
  });

  const onChangeCoords = async (coords: LatLng) => {
    setRegion(coords);
  };

  return (
    <MapView
      initialRegion={{
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
      onRegionChangeComplete={(coords) => {
        onChangeCoords(coords);
        onChangePin && onChangePin(coords);
      }}
      onRegionChange={onChangeCoords}
      style={style}
    >
      <Marker coordinate={region || cords} />
    </MapView>
  );
}
