import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./styles";
import { NavigationProp } from "@react-navigation/native";

// Esquema de validação
const schema = yup.object().shape({
  productName: yup.string().required("Nome do produto é obrigatório"),
  quantity: yup.number().typeError("Quantidade deve ser um número").integer("Deve ser um número inteiro").min(1, "Deve ser pelo menos 1 unidade").required("Quantidade é obrigatória"),
});

const SellProductScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [stock, setStock] = useState(10); // Simulando um estoque inicial

  const onSell = (data: Record<string, any>) => {
    if (data.quantity > stock) {
      Alert.alert("Erro", "Estoque insuficiente!");
    } else {
      setStock(stock - data.quantity);
      Alert.alert("Sucesso", `Venda registrada!\nProduto: ${data.productName}\nQuantidade: ${data.quantity}`);
      navigation.goBack();
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Registrar Venda</Text>

      <Controller
        control={control}
        name="productName"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nome do Produto"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.productName}
          />
        )}
      />
      {errors.productName && <Text style={{ color: "red" }}>{errors.productName.message}</Text>}

      <Controller
        control={control}
        name="quantity"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Quantidade"
            mode="outlined"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.quantity}
          />
        )}
      />
      {errors.quantity && <Text style={{ color: "red" }}>{errors.quantity.message}</Text>}

      <Text style={{ marginTop: 10 }}>Estoque disponível: {stock}</Text>

      <Button mode="contained" onPress={handleSubmit(onSell)} style={styles.button}>
      <Text style={styles.buttonText}>Registrar Venda</Text>
        
      </Button>
    </View>
  );
};

export default SellProductScreen;
