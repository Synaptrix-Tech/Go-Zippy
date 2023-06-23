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
import { Button } from '@components/Button';
import { ArrowLeft } from 'phosphor-react-native';

export function StartLayout() {
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
          <Button title="Login" />
          <Button title="Register" variation="outline" />
        </Footer>
      </Overlay>
    </Container>
  );
}
