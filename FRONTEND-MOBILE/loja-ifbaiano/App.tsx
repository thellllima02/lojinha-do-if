import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/Home';
import AddCustomerScreen from './src/screens/cliente/index';
import AddProductScreen from './src/screens/produto';
import SellProductScreen from './src/screens/venda';
import AppNavigator from './src/navigation/AppNavigation';

const Stack = createStackNavigator();

export default function App() {
  return <AppNavigator />;
}