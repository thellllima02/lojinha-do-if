import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NavigationProp } from '@react-navigation/native';

const HomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Cadastro Cliente")}
        >
          <Text style={styles.buttonText}>Adicionar Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Cadastro Produto")}
        >
          <Text style={styles.buttonText}>Cadastrar Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Cadastro Venda")}
        >
          <Text style={styles.buttonText}>Cadastrar Vendas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

