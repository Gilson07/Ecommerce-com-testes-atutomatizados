import React from 'react';
import { TextInputProps } from 'react-native';

// Styles
import {
  Container,
  Input,
  Button,
  InputArea,
  ButtonClear,
  IconClear,
  IconSearch
} from './styles';

// Types
type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
};

export function Search({ onSearch, onClear, ...rest }: Props) {

  return (
    <Container>

      <InputArea>
        <Input placeholder='Pesquisar...' {...rest} />
        <ButtonClear onPress={onClear}>
          <IconClear name="x" />
        </ButtonClear>
      </InputArea>

      <Button onPress={onSearch}>
        <IconSearch name="search" />
      </Button>

    </Container>
  )
}