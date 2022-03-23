import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { ProductProps } from '@components/Product';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const EmptyContainer = styled.View`
  padding: 40px 0;
`;

export const EmptyTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
  `};
`;

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(400)}px;
  margin-top: 20px;
  border-radius: 20px;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 1, y: 1 }
}))`
  width: 100%;
  height: ${RFPercentage(15)}px;
`;

export const HeaderWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
`;

export const TitleHeader = styled.Text`
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
  `};
`;

export const CleanBag = styled.TouchableOpacity`

`;

export const TitleBag = styled.Text`
  font-size: ${RFValue(12)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
  `};
`;

export const Content = styled.ScrollView`
  padding: 0 10px;
`;