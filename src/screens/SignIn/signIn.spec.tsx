import React from 'react';
jest.useFakeTimers()
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { render } from '@testing-library/react-native';

import theme from '@global/styles';

import { SignIn } from './index';

describe('SignIn Screen', () => {

  const component = (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>
    </ThemeProvider>
  );

  it('Should have placeholder correctly in user e-mail input', () => {


    const { getByPlaceholderText } = render(component);

    const inputEmail = getByPlaceholderText('E-mail');

    expect(inputEmail).toBeTruthy();

  });

  it('Should have placeholder correctly in user password input', () => {


    const { getByPlaceholderText } = render(component);

    const inputPassword = getByPlaceholderText('Senha');

    expect(inputPassword).toBeTruthy();

  });


  it('Should exist title correctly', () => {


    const { getByTestId } = render(component);

    const textTitle = getByTestId('text-welcome');

    expect(textTitle.props.children).toContain('Bem Vindo');

  });

});