import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Badge } from 'react-native-paper';

import { ProductProps } from '@components/Product';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 1, y: 1 }
}))`
  width: 100%;
  height: ${RFPercentage(20)}px;
  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 40px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CartContainer = styled(RectButton)``;

export const BadgeCount = styled(Badge).attrs({
  size: 23
})`
  margin-bottom: -5px;
  elevation: 1;
`;

export const ButtonCart = styled.View`
  background-color: ${({ theme }) => theme.colors.title};
  align-items: center;
  padding: 5px;
  border-radius: 20px;
  margin-right: 5px;
  z-index: -1;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
`;

export const ProductList = styled(FlatList as new () => FlatList<ProductProps>).attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 125,
    marginHorizontal: 14,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 24px 0;
  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

export const MenuItemsNumber = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
  `};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
  `};
`;