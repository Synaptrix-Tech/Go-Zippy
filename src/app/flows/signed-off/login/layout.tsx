import React from 'react';
import {
  Container,
  Content,
  Description,
  Footer,
  Overlay,
  Title,
} from './styles';
import Img from '@assets/signin.jpg';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Button } from '@components/Button';

export function LoginLayout() {
  return (
    <Container source={Img}>
      <Overlay>
        <Content>
          <Title>
            DELIVERY{'\n'}FOOD TO{'\n'}YOUR DOOR.
          </Title>

          <Description>
            Set exact location to find the right{'\n'}restaurant near you.
          </Description>
        </Content>
        <Footer>
          <Button title="Login"></Button>
        </Footer>
      </Overlay>
    </Container>
  );
}
