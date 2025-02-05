import React from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./styles";

// Esquema de validação
const schema = yup.object().shape({
  name: yup.string().required("Nome do produto é obrigatório"),
  price: yup
    .number()
    .typeError("Preço deve ser um número")
    .positive("Preço deve ser positivo")
    .required("Preço é obrigatório"),
  stock: yup
    .number()
    .typeError("Quantidade deve ser um número")
    .integer("Deve ser um número inteiro")
    .min(1, "Deve ter pelo menos 1 unidade")
    .required("Estoque é obrigatório"),
});

const AddProductScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Produto cadastrado:", data);
    alert("Produto cadastrado com sucesso!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nome do Produto"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.name}
          />
        )}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Preço"
            mode="outlined"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.price}
          />
        )}
      />
      {errors.price && <Text style={styles.errorText}>{errors.price.message}</Text>}

      <Controller
        control={control}
        name="stock"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Quantidade em Estoque"
            mode="outlined"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.stock}
          />
        )}
      />
      {errors.stock && <Text style={styles.errorText}>{errors.stock.message}</Text>}

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
      <Text style={styles.buttonText}>Cadastrar Produto</Text>
        
      </Button>
    </View>
  );
};

export default AddProductScreen;
