import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Switch, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [status, setStatus] = useState(false);
  const [limite, setLimite] = useState(100);
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    { id: 0, sexo: "Selecione" },
    { id: 1, sexo: "Outros" },
    { id: 2, sexo: "Masculino" },
    { id: 3, sexo: "Feminino" },
  ]);

  function abrirConta() {
    if (nome === "" || idade === "" || sexoSelecionado === 0) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }
    Alert.alert(
      "Conta criada!",
      `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo[sexoSelecionado].sexo}\nLimite: R$ ${limite.toFixed(2)}\nEstudante: ${status ? "Sim" : "Não"}`
    );
  }

  let genero = sexo.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexo} />;
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>BANCO SUJEITO</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          value={idade}
          keyboardType="numeric"
          onChangeText={setIdade}
        />
        <Picker
          style={styles.picker}
          selectedValue={sexoSelecionado}
          onValueChange={(itemValue) => setSexoSelecionado(itemValue)}
        >
          {genero}
        </Picker>
        <Text style={styles.label}>Seu Limite: R$ {limite.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10000}
          value={limite}
          onValueChange={setLimite}
          thumbTintColor="#27ae60"
          minimumTrackTintColor="#27ae60"
        />
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Estudante:</Text>
          <Switch
            value={status}
            onValueChange={setStatus}
            trackColor={{ false: "#d63031", true: "#00b894" }}
            thumbColor={status ? "#00b894" : "#d63031"}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={abrirConta}>
          <Text style={styles.buttonText}>Abrir Conta</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#2d3436",
    marginBottom: 25,
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
  picker: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#27ae60",
    borderWidth: 1,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    color: "#636e72",
    fontWeight: "bold",
  },
  slider: {
    marginTop: 10,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
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