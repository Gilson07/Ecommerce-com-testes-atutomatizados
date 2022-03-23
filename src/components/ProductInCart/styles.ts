import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.border};
  flex-direction: row;
  justify-content: space-around;
  border-radius: 6px;
  padding: 5px;
  margin: 10px 0;
`;

export const ProductImage = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(65)}px;
  border-radius: 10px;
`;

export const Details = styled.View`
  max-width: ${RFValue(170)}px;
`;

export const DetailWrapper = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Description = styled.Text`
  height: ${RFValue(45)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Price = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Amount = styled.View`
  width: 80px;
  align-self: flex-end;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 10px
`;

export const Decrement = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(24)}px;
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Increment = styled.TouchableOpacity``;