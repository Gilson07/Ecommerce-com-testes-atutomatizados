import * as React from 'react';
import { KeyboardTypeOptions, TextInputProps } from 'react-native'

// Types
export interface Props extends TextInputProps {
  placeholder?: string,
  value: string,
  onChangeText: (text: string) => void,
  secureTextEntry?: boolean,
  autoCorrect: boolean,
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined,
  keyboardType?: KeyboardTypeOptions
  isPassword?: boolean,
  active?: boolean
}

// Styles
import {
  Container,
  TextInput
} from './styles';

function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  keyboardType,
  isPassword,
  active = false
}: Props) {
  return (
    <Container isPassword={isPassword}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        active={active}
        testID="input-email"
      />
    </Container>
  );
}

export default Input;