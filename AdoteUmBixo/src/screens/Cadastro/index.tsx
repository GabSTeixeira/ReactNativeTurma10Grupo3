import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";
import logo from "../../assets/images/Logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import axios from "axios";

const Cadastro = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://localhost:8080/users", {
        name,
        email,
        password,
      });
      navigation.navigate("Login");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>
      <View>
        <Text style={styles.tituloCadastro}>Cadastro</Text>
      </View>
      <View>
        <Text style={GlobalStyle.texto}>Nome Completo do adotante:</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faUser} size={20} style={styles.icon} />
          <Input
            style={styles.caixaTexto}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nome Completo"
          />
        </View>
      </View>
      <View>
        <Text style={GlobalStyle.texto}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} size={20} style={styles.icon} />
          <Input
            style={styles.caixaTexto}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            placeholder="Email"
          />
        </View>
      </View>
      <View>
        <Text style={GlobalStyle.texto}>Senha</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faKey} size={20} style={styles.icon} />
          <Input
            style={styles.caixaTexto}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Senha"
          />
        </View>
      </View>
      <View>
        <Text style={GlobalStyle.texto}>Confirmar Senha</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faKey} size={20} style={styles.icon} />
          <Input
            style={[
              styles.caixaTexto,
              confirmPassword !== password && styles.inputError,
            ]}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            placeholder="Confirmar Senha"
          />
        </View>
      </View>
      <View>
        <Button
          buttonStyle={{ backgroundColor: GlobalStyle.laranja.color }}
          onPress={handleCadastro}
        >
          <Text style={styles.textoBotao}>Finalizar</Text>
        </Button>
      </View>
      <LinkBar
        questionText="Já tem Cadastro? "
        linkText="Logar-se"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  )};

export default Cadastro;
