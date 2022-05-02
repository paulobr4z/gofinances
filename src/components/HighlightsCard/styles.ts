import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  width: ${RFValue(300)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: 42px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text``;

export const Icon = styled(Feather)``;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;
