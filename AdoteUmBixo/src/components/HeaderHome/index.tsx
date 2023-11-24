import { Image, View, Text } from "react-native";
import { Button } from "../Button";
import logo from "../../assets/images/Logo.png";
import { styles } from "./styles";
import GlobalStyle from "../../globalStyle/GlobalStyle";

interface HeaderHomeProps {
  navigation: any;
  logado: boolean;
  handleDeslogar: () => Promise<void>
}


const HeaderHome = ({ navigation, logado, handleDeslogar }: HeaderHomeProps) => {



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
            justifyContent: (logado) ? ("flex-end") : ("center"),
            gap: 10,
            width: "70%",
          }}
        >
          {(logado) ? (
            <>
              <Button
              buttonStyle={[
                styles.botao,
                { backgroundColor: GlobalStyle.rosa.color },
              ]}
              onPress={handleDeslogar}
              >
                <Text style={[{ color: GlobalStyle.branco.color }, styles.texto]}>
                  Deslogar
                </Text>
              </Button>
            </>
          ):(
            <>
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
            </>
          )}

        </View>
      </View>
    </View>
  )};
export default HeaderHome;
