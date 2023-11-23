import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import HeaderLoginCadastro from "../../components/HeaderLoginCadastro";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const db = getDatabase();
    const usersRef = ref(db, "/users");
    const q = query(usersRef, orderByChild("email"), equalTo(email));

    get(q)
      .then(async (snapshot) => {
        if (snapshot.exists()) {
          try {
            await AsyncStorage.setItem("@user_email", email);
          } catch (error) {
            console.error(error);
          }
          navigation.navigate("Home");
        } else {
          console.log("Usúario não cadastrado");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
  )};

export default Login;
