import React from 'react';
jest.useFakeTimers();
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

import { SignIn } from '.';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../../src/global/styles';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('SignIn Screen1', () => {

  const component = (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );

  it('Should have placeholder correctly in user e-mail input', () => {


    const { getByPlaceholderText } = render(component, { wrapper: Providers });

    const inputEmail = getByPlaceholderText('E-mail');

    expect(inputEmail).toBeTruthy();

  });

  it('Should have placeholder correctly in user password input', () => {


    const { getByPlaceholderText } = render(component, { wrapper: Providers });

    const inputPassword = getByPlaceholderText('Senha');

    expect(inputPassword).toBeTruthy();

  });


  it('Should exist title correctly', () => {


    const { getByTestId } = render(component, { wrapper: Providers });

    const textTitle = getByTestId('text-welcome');

    expect(textTitle.props.children).toContain('Bem Vindo');

  });

});