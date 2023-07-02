import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const CarouselImage = styled.Image`
  width: ${WIDTH_SCREEN - 32}px;
  height: 240px;
  border-radius: 16px;
`;
