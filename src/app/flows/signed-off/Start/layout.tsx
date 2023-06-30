import React from 'react';
import {
  Container,
  Content,
  Description,
  Footer,
  Overlay,
  Title,
} from './styles';
import Img from '@assets/start.jpg';
import { Button } from '@components/Button';

type StartLayoutProps = {
  handleGoToLogin: () => void;
  handleGoToRegister: () => void;
};

export function StartLayout({
  handleGoToLogin,
  handleGoToRegister,
}: StartLayoutProps) {
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
          <Button title="Login" onPress={handleGoToLogin} />
          <Button
            title="Register"
            variation="outline"
            onPress={handleGoToRegister}
          />
        </Footer>
      </Overlay>
    </Container>
  );
}
