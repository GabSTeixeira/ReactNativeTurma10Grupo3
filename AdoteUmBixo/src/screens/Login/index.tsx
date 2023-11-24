import { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import { styles } from "./styles";
import { LoginContext } from "../../contexts/LoginContext";
import { UserProps } from "../../services/api/firebase/Types";
import { queryLogin } from "../../services/api/firebase/UserAPi";
import { Alert } from "react-native";

import HeaderLoginCadastro from "../../components/HeaderLoginCadastro";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addUserLogado, switchLogado } = useContext(LoginContext)

  const handleLogin = async () => {
    if (email.length < 10 || password.length < 3) {
      Alert.alert('Campos obrigatorios', 'Por favor, preencha todos os campos corretamente.')
      return null
    }

    await queryLogin(email).then(res => {
      if (res) {
        addUserLogado(res)
        switchLogado(true)
        
        navigation.navigate("Home");
      } else {
        addUserLogado({} as UserProps)
        switchLogado(false)
      }
    }).catch(console.error);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <HeaderLoginCadastro>
            <Text style={styles.titulo}>Login</Text>
          </HeaderLoginCadastro>
        </View>
        <View style={styles.content}>
          <Input
            title="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={faEnvelope}
          />
          <Input
            title="Senha"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            icon={faKey}
          />
        </View>
      </ScrollView>
      <View style={styles.content}>
        <Button
          buttonStyle={{ backgroundColor: GlobalStyle.verde.color }}
          onPress={handleLogin}
        >
          <Text style={styles.textoBotao}>Login</Text>
        </Button>
        <LinkBar
          questionText="Não tem Cadastro? "
          linkText="Cadastre-se"
          onPress={() => navigation.navigate("Cadastro")}
        />
      </View>
    </SafeAreaView>
  )
};

export default Login;
