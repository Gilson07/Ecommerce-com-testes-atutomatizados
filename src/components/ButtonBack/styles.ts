import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
`;