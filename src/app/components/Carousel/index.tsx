import { View, Image, Dimensions } from 'react-native';
import React from 'react';
import CarouselReanimated from 'react-native-reanimated-carousel';
import { CarouselImage } from './styles';

const img = [
  'https://cdn.msiapromos.com/wp-content/uploads/2020/09/McDelivery-15-Sep-2020.jpg',
  'https://themoneyninja.com/wp-content/uploads/2020/12/Food-Delivery-Apps-Hero-Image.jpg',
];

const WIDTH = Dimensions.get('screen').width;
export const Carousel = () => {
  return (
    <CarouselReanimated
      vertical={false}
      loop
      width={WIDTH}
      data={img}
      autoPlay
      autoPlayInterval={3000}
      renderItem={({ item, index }) => (
        <CarouselImage key={index} source={{ uri: item }} />
      )}
    />
  );
};
