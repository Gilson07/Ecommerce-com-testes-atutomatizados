import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';

// Import styles
import theme from '@global/styles';

// Import Cotexts
import { CartProvider } from '@contexts/CartContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <CartProvider>
          <StatusBar style='dark' translucent backgroundColor='transparent' />
          <AppRoutes />
        </CartProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
