import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Import Components 
import { Load } from '@components/Load';
import TextInput from '@components/TextInput';

// Import Routes
import { StackParamsList } from '@routes/app.routes';

// Types
type homeScreenProp = NativeStackNavigationProp<StackParamsList, 'SignIn'>;

// Styles
import {
  Container,
  LogoImage,
  FormContainer,
  WelcomeText,
  InputContainer,
  RecoverPassword,
  RecoverPasswordText,
  AccessButton,
  ButtonText,
  CreateAccountContainer,
  CreateAccountText,
  CreateAccountButton,
  CreateAccountButtonText,
  AlertSnackBar,
  SnackBarText
} from './styles';

export function SignIn() {

  const navigation = useNavigation<homeScreenProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  function onToggleSnackBar() {
    setSnackBarVisible(!snackBarVisible)
  }

  function renderSnackbar(message: string) {
    setSnackBarMessage(message);
    onToggleSnackBar();
  }

  function handleHome() {
    navigation.navigate('Home');
  }

  const validateLogin = () => {
    setLoading(true)
    if (!email) {
      renderSnackbar('Favor preencher o E-mail')
      setLoading(false);
    } else if (!password) {
      renderSnackbar('Favor preencher a senha');
      setLoading(false);
    } else {
      handleHome();
    }
  }

  return (
    <Container>

      <LogoImage source={require('@assets/images/logo.png')} />

      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WelcomeText testID='text-welcome'>
          Bem-Vindo
        </WelcomeText>
        <InputContainer>
          <TextInput
            testID="input-email"
            placeholder="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            isPassword={false}
          />
          <TextInput
            testID="input-senha"
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
            isPassword={true}
          />
          <RecoverPassword>
            <RecoverPasswordText>Recuperar senha</RecoverPasswordText>
          </RecoverPassword>
          <AccessButton testID="button-Login" onPress={validateLogin}>
            {
              loading ? (
                <Load />
              ) : (
                <ButtonText>Acessar</ButtonText>
              )
            }
          </AccessButton>
        </InputContainer>
      </FormContainer>

      <CreateAccountContainer>
        <CreateAccountText>Não tem conta?</CreateAccountText>
        <CreateAccountButton>
          <CreateAccountButtonText>Crie uma nova agora</CreateAccountButtonText>
        </CreateAccountButton>
      </CreateAccountContainer>

      <AlertSnackBar
        visible={snackBarVisible}
        onDismiss={onToggleSnackBar}
        action={{
          label: 'Fechar',
          onPress: onToggleSnackBar,
        }
        }>
        <SnackBarText>{snackBarMessage}</SnackBarText>
      </AlertSnackBar >

    </Container>
  );
}

export default SignIn;