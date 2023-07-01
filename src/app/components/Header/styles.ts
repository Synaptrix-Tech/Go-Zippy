import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LocationContainer = styled.View`
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
  position: relative;
`;

export const Badge = styled.View`
  position: absolute;
  top: -15px;
  right: -12px;

  width: 18px;
  height: 18px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ORANGE};
`;

export const BadgeText = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 12px;
  font-weight: bold;
`;
