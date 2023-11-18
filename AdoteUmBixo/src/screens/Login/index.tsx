import { useContext } from "react"
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import logined from "../../contexts/AuthContext";
import AuthContext from "../../contexts/AuthContext";
import { login } from "../../services/api/auth/auth";

const Login: React.FC = () => {
    const { logined } = useContext(AuthContext);

    console.log(logined)

    async function handleLogin() {
        const response = await login();
        console.log(response)
    }

  return (
    <View>
      <Button onPress={handleLogin}><Text>Login</Text></Button>
    </View>
  );
};

export default Login;
