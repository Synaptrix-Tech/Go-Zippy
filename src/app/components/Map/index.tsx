import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  cords: {
    latitude: number;
    longitude: number;
  };
  style?: StyleProp<ViewStyle>;
};

export function Map({ cords, style }: Props) {
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: cords?.latitude,
        longitude: cords?.longitude,
        latitudeDelta: 0.00457,
        longitudeDelta: 0.006866,
      }}
    >
      <Marker
        coordinate={{
          latitude: cords?.latitude,
          longitude: cords?.longitude,
        }}
      />
    </MapView>
  );
}
