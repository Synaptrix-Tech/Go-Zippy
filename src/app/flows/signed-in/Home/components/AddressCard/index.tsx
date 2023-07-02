import React from 'react';
import {
  Address,
  AddressInfo,
  Complement,
  Container,
  Content,
  Header,
  HeaderActions,
  Title,
} from './styles';
import { CheckCircle, DotsThreeVertical, MapPin } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  isSelected: boolean;
};

export function AddressCard({ isSelected }: Props) {
  const { colors } = useTheme();
  return (
    <Container isSelected={isSelected}>
      <MapPin size={24} color={colors.GRAY_MEDIUM} />
      <Content>
        <Header>
          <Title>Casa</Title>
          <HeaderActions>
            {isSelected ? (
              <TouchableOpacity>
                <CheckCircle size={22} color={colors.ORANGE} weight="fill" />
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity>
              <DotsThreeVertical size={22} color={colors.ORANGE} />
            </TouchableOpacity>
          </HeaderActions>
        </Header>

        <Address>
          <AddressInfo>Estrada do rio grande,868</AddressInfo>
          <AddressInfo>Taquara</AddressInfo>
          <AddressInfo>Rio de Janeiro/RJ</AddressInfo>
        </Address>
        <Complement>Bloco 2 704</Complement>
      </Content>
    </Container>
  );
}
