import React from 'react';
import {
  AddressContainer,
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
import { TouchableOpacity } from 'react-native';
import { Address } from 'src/model/Address';

type Props = {
  address: Address;
};

export function AddressCard({ address }: Props) {
  const { colors } = useTheme();
  return (
    <Container isSelected={address.selected}>
      <MapPin size={24} color={colors.GRAY_MEDIUM} />
      <Content>
        <Header>
          <Title>Casa</Title>
          <HeaderActions>
            {address.selected ? (
              <TouchableOpacity>
                <CheckCircle size={22} color={colors.ORANGE} weight="fill" />
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity>
              <DotsThreeVertical size={22} color={colors.ORANGE} />
            </TouchableOpacity>
          </HeaderActions>
        </Header>

        <AddressContainer>
          <AddressInfo>
            {address.street},{address.number}
          </AddressInfo>
          <AddressInfo>{address.state}</AddressInfo>
          <AddressInfo>
            {address.city}/{address.state}
          </AddressInfo>
        </AddressContainer>
        <Complement>{address.complement}</Complement>
      </Content>
    </Container>
  );
}
