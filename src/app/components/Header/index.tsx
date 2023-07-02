import React from 'react';
import {
  ActionButton,
  ActionsContainer,
  Badge,
  BadgeText,
  ButtonChildrenText,
  Container,
  LocationContainer,
  Text,
  Title,
} from './styles';
import { Button } from '@components/Button';
import { Bell, CaretDown, MapPin, ShoppingCart } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export type Props = {
  cartCount: number;
  notificationCount: number;
  location: string;
  onOpenBottomSheet?: () => void;
};

export function Header({
  cartCount,
  notificationCount,
  location,
  onOpenBottomSheet,
}: Props) {
  const { colors } = useTheme();

  return (
    <Container>
      <LocationContainer>
        <Title>Delivery Location</Title>
        <Button
          testID="location-button"
          variation="ghost"
          leftIcon
          onPress={onOpenBottomSheet}
          icon={<MapPin size={16} color={colors.ORANGE} weight="fill" />}
        >
          <ButtonChildrenText>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {location}
            </Text>
            <CaretDown size={18} color={colors.ORANGE} weight="bold" />
          </ButtonChildrenText>
        </Button>
      </LocationContainer>

      <ActionsContainer>
        <ActionButton>
          {cartCount > 0 ? (
            <Badge testID="cart-badge">
              <BadgeText>{cartCount}</BadgeText>
            </Badge>
          ) : null}

          <ShoppingCart size={22} color={colors.GRAY_DARK} />
        </ActionButton>

        <ActionButton>
          {notificationCount > 0 ? (
            <Badge testID="alert-badge">
              <BadgeText>{notificationCount}</BadgeText>
            </Badge>
          ) : null}
          <Bell size={22} color={colors.GRAY_DARK} />
        </ActionButton>
      </ActionsContainer>
    </Container>
  );
}
