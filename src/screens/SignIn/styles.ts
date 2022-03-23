import styled from 'styled-components/native';
import { Snackbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px 15px 30px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoImage = styled.Image`
  margin-top: 20px;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const WelcomeText = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  align-self: center;
  margin: 0 0 50px 0;
`;

export const InputContainer = styled.View``;

export const RecoverPassword = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 10px 0 0 0;
`;

export const RecoverPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const AccessButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.border};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
`;

export const CreateAccountContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const AlertSnackBar = styled(Snackbar)`
  background-color: ${({ theme }) => theme.colors.attention};
`;

export const SnackBarText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
`;