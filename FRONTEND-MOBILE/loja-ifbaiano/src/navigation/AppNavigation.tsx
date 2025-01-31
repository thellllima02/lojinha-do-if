import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/Home';
import AddCustomerScreen from '../screens/cliente/index';
import AddProductScreen from '../screens/produto/index';
import SellProductScreen from '../screens/venda/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Cadastro Cliente" component={AddCustomerScreen} />
        <Stack.Screen name="Cadastro Produto" component={AddProductScreen} />
        <Stack.Screen name="Cadastro Venda" component={SellProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

