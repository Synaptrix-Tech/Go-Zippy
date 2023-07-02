import styled from 'styled-components/native';

type ContainerProps = {
  isSelected?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 32px;

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    
   border-width: 1px;
   border-color: ${theme.colors.ORANGE};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  margin-bottom: 8px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
`;

export const AddressContainer = styled.View`
  gap: 4px;
`;

export const AddressInfo = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_MEDIUM};
`;

export const Complement = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_MEDIUM};
  margin-top: 8px;
`;
