import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  position: relative;
  z-index: 1;
`;

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 32px;
`;

export const Content = styled.View`
  flex-grow: 6;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 34px;
  font-weight: bold;
  line-height: 50px;
`;

export const Description = styled.Text`
  margin-top: 16px;
  color: #d7d5d5;
`;

export const Footer = styled.View`
  flex-grow: 1;
  gap: 16px;
`;
