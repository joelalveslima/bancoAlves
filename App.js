import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Switch } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState(100);
  const [selectedValue, setSelectedValue] = useState(0);
  const [sexo, setSexo] = useState([
    { id: 0, sexo: "" },
    { id: 1, sexo: "Outros" },
    { id: 2, sexo: "Masculino" },
    { id: 3, sexo: "Feminino" },
  ]);

  let genero = sexo.map((v, k) => {
    return <Picker.item key={k} value={k} label={v.sexo} />;
  });

  function pegarNome(nome) {
    if (nome === "") {
      alert("Digite seu nome!");
      return;
      setNome(nome);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>BANCO ALVES</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Digite Seu Nome!!:"
          onChangeText={(nome) => pegarNome(nome)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua Idade!!:"
          onChangeText={(idade) => pegarIdade(idade)}
        />

        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {genero}
        </Picker>
        <Slider
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(x) => setValue(x)}
          thumbTintColor="green"
        />
        <Text>Seu Salario:{value.toFixed(0)}</Text>

        <Switch
          value={status}
          onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={{ false: "red", true: "green" }}
          thumbColor={status ? "green" : "red"}
        />
        <Text> Status: {status ? "ATIVO" : "NEGATIVO"}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// ...existing code...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: "#27ae60",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#2d3436",
    marginBottom: 25,
  },
  picker: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#27ae60",
    borderWidth: 1,
  },
  slider: {
    marginTop: 20,
    marginBottom: 10,
  },
  salario: {
    fontSize: 18,
    color: "#0984e3",
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    color: "#636e72",
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#27ae60",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

