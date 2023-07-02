import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;

  gap: 16px;
`;

export const BottomSheetContent = styled.View`
  flex: 1;
  padding: 16px;
`;

export const BottomSheetHeader = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
export const BottomSheetTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  text-align: center;
  flex: 1;
`;
