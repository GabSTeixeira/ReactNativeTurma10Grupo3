import React from "react";
import { Image, View, Text } from "react-native";
import { Button } from "../Button";
import logo from "../../assets/images/Logo.png";
import { styles } from "./styles";
import GlobalStyle from "../../globalStyle/GlobalStyle";

const HeaderHome = ({ navigation }: any) => {
  const handleCadastro = () => {
    navigation.navigate("Cadastro");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={logo} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            width: "70%",
          }}
        >
          <Button
            buttonStyle={[
              styles.botao,
              { backgroundColor: GlobalStyle.verde.color },
            ]}
            onPress={handleLogin}
          >
            <Text style={[{ color: GlobalStyle.branco.color }, styles.texto]}>
              Login
            </Text>
          </Button>
          <Button
            buttonStyle={[
              styles.botao,
              { backgroundColor: GlobalStyle.laranja.color },
            ]}
            onPress={handleCadastro}
          >
            <Text style={[{ color: GlobalStyle.branco.color }, styles.texto]}>
              Cadastro
            </Text>
          </Button>
        </View>
      </View>
    </View>
  )};
export default HeaderHome;
