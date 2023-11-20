import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import styles from "./styles";
import logo from "../../assets/images/Logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import LinkBar from "../../components/LinkBar";

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
      <Text style={[GlobalStyle.titulo, { color: GlobalStyle.verde.color }]}>Login</Text>

      <View>
        <Text style={GlobalStyle.texto}>Email</Text>
        <Input
          style={{ backgroundColor: GlobalStyle.branco.color, borderColor: GlobalStyle.opala.color }}

          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <View>
        <Text style={GlobalStyle.texto}>Senha</Text>
        <Input
          style={{ backgroundColor: GlobalStyle.branco.color, borderColor: GlobalStyle.opala.color }}

          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <Button
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={{ color: GlobalStyle.fullBranco.color }}>Login</Text>
      </Button>
      <LinkBar
        questionText="Não tem Cadastro? "
        linkText="Cadastre-se"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </SafeAreaView>
  )};

export default Login;
