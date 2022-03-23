import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


interface ButtonProps extends TouchableOpacityProps {
  isAddButton: boolean
}

export const Container = styled.View`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 5px;
  margin: 10px 1%;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: ${RFValue(65)}px;
  border-radius: 10px;
`;

export const Details = styled.View``;

export const Description = styled.Text`
  height: ${RFValue(45)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin: 5px 0;
`;

export const Price = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme, isAddButton }) => (isAddButton ? theme.colors.primary : theme.colors.attention)};
  height: ${RFValue(22)}px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const AddToCart = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;