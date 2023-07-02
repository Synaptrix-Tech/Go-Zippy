import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Header = styled(SafeAreaView)`
  position: absolute;
  flex-direction: row;
  top: 0%;
  width: 100%;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.WHITE_50};
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Title = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  font-size: 16px;
  flex: 1;
  text-align: center;
`;
