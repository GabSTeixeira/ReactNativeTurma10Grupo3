import { useContext } from "react"
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

const Login: React.FC = () => {

    async function handleLogin() {
    }

  return (
    <View>
      <Button onPress={handleLogin}><Text>Login</Text></Button>
    </View>
  );
};

export default Login;
