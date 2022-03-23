import React from 'react';
jest.useFakeTimers()
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../../src/global/styles';

import Input from '.';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('InputText Component', () => {
  it('must have specific border color when active', () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers
      }
    );

    const inputComponent = getByTestId('input-email');

    expect(inputComponent.props.style[0].borderColor).toEqual(theme.colors.primary);

    expect(inputComponent.props.style[0].borderWidth).toEqual(3);

  });
});