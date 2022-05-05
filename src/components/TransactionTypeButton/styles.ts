import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather';

interface IIcon {
  type: 'up' | 'down';
}

interface IContainer {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<IContainer>`
  flex: 2;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => isActive ? 0 : '1.5px' };
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({ isActive, type }) => isActive && type === "up" && css`
    background-color: ${({ theme }) => theme.colors.success_ligth};
  `}

  ${({ isActive, type }) => isActive && type === "down" && css`
    background-color: ${({ theme }) => theme.colors.attention_ligth};
  `}
`;

export const Icon = styled(Feather)<IIcon>`
  color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.success : theme.colors.attention
  };
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
