import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import { SignIn } from '@screens/SignIn';
import { Home } from '@screens/Home';
import { ShoppingCart } from '@screens/ShoppingCart';

// Types
export type StackParamsList = {
  SignIn: undefined;
  Home: undefined;
  ShoppingCart: undefined;
}

const Stack = createNativeStackNavigator<StackParamsList>();

export function AppRoutes() {

  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}