import { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import LinkBar from "../../components/LinkBar";

const Login = ({ navigation }: any) => {
  async function handleLogin() {}

  return (
    <View>
      <Button onPress={handleLogin}>
        <Text>Login</Text>
      </Button>
      <LinkBar
        questionText="Não tem Cadastro? "
        linkText="Cadastre-se"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  )};

export default Login;
