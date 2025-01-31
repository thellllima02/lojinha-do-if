import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Tela Inicial</Text>
      <Button 
        title="Adicionar Clientes" 
        onPress={() => navigation.navigate("Cadastro Cliente")} 
      />
      <Button 
        title="Cadastrar Produtos" 
        onPress={() => navigation.navigate("Cadastro Produto")} 
      />
      <Button 
        title="Cadastrar Vendas" 
        onPress={() => navigation.navigate("Cadastro Venda")} 
      />
    </View>
  );
};

export default HomeScreen;



