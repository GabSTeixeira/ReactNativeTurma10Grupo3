
import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import { styles } from "./styles";
import { queryCadastro } from "../../services/api/firebase/UserAPi";
import { UserProps } from "../../services/api/firebase/Types";
import { Alert } from 'react-native'
import HeaderLoginCadastro from "../../components/HeaderLoginCadastro";


const Cadastro = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleCadastro = async () => {
      if (name.length < 3 || email.length < 10 || password.length < 3 || password != confirmPassword) {
        Alert.alert('Campos obrigatorios', 'Por favor, preencha todos os campos corretamente.')
        return null
      }

      await queryCadastro({name, email, password} as UserProps).then((res)=> {
        if (res) {
          navigation.navigate("Login");
        }
      }).catch((error)=>console.error("Erro ao cadastrar usuário:", error))

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("")
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <HeaderLoginCadastro>
            <Text style={styles.titulo}>Cadastro</Text>
          </HeaderLoginCadastro>
        </View>
        <View style={styles.content}>
          <Input
            title="Nome Completo do adotante:"
            style={styles.input}
            value={name}
            secureTextEntry={true}
            onChangeText={(text) => setName(text)}
            placeholder="Nome Completo"
            icon={faUser}
          />
          <Input
            title="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            placeholder="Email"
            secureTextEntry={true}
            autoCapitalize="none"
            icon={faEnvelope}
          />
          <Input
            title="Senha"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Senha"
            icon={faKey}
          />
          <Input
            title="Confirmar Senha"
            style={[
              styles.input,
              confirmPassword !== password && styles.inputError,
            ]}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            placeholder="Confirmar Senha"
            icon={faKey}
          />
        </View>
      </ScrollView>
      <View style={styles.content}>
        <Button
          buttonStyle={{ backgroundColor: GlobalStyle.laranja.color }}
          onPress={handleCadastro}
        >
          <Text style={styles.textoBotao}>Finalizar</Text>
        </Button>
        <LinkBar
          questionText="Já tem Cadastro? "
          linkText="Logar-se"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  )};

export default Cadastro;
