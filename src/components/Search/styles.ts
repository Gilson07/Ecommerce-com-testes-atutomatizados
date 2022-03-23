import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border: 1px solid ${theme.colors.border};
  `};
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.text
}))`
  flex: 1;
  height: ${RFValue(52)}px;
  padding-left: 12px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`;

export const Button = styled(RectButton)`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 18px;
  margin-left: 18px;
`;

export const IconClear = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;

export const IconSearch = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
`;
