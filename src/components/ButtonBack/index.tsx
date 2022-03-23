import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

// Styles
import {
  Container,
  Icon,
} from './styles';

export function ButtonBack({ ...rest }: RectButtonProps) {

  return (
    <Container {...rest}>
      <Icon name="chevron-left" />
    </Container>
  )
}