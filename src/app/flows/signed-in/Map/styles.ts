import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Header = styled(SafeAreaView)`
  position: absolute;
  top: 0%;
  width: 100%;
  z-index: 2;
  left: 0;
  background-color: ${({ theme }) => theme.colors.WHITE_50};

  padding: 0 16px;
`;

export const HeaderAction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  font-size: 14px;
  flex: 1;
  text-align: center;
`;

export const Address = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  font-size: 16px;
  flex: 1;
  text-align: center;

  margin-top: 16px;
`;

export const ConfirmButtonContainer = styled(SafeAreaView)`
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: 0 16px;
`;

export const BottomSheetContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const BottomSheetContent = styled.View`
  margin-top: 16px;
  padding: 16px;
`;

export const BottomSheetTitle = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  font-size: 16px;
  font-weight: bold;
`;

export const BottomSheetSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_MEDIUM};
  font-size: 14px;
  margin-top: 4px;
`;
