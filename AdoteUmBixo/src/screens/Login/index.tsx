import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import logo from "../../assets/images/Logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import styles from "./styles";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.tituloLogin}>Login</Text>

      <View>
        <Text style={GlobalStyle.texto}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} size={20} style={styles.icon} />
          <Input
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View>
        <Text style={GlobalStyle.texto}>Senha</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faKey} size={20} style={styles.icon} />
          <Input
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View>
        <Button
          buttonStyle={{ backgroundColor: GlobalStyle.verde.color }}
          onPress={handleLogin}
        >
          <Text style={styles.textoBotao}>Login</Text>
        </Button>
      </View>
      <LinkBar
        questionText="Não tem Cadastro? "
        linkText="Cadastre-se"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </SafeAreaView>
  )};

export default Login;
