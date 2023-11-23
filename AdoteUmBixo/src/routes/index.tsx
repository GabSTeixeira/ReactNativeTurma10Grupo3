import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoute";
import { LoginProvider } from "../contexts/LoginContext";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <LoginProvider>
        <StackRoutes />
      </LoginProvider>
    </NavigationContainer>
  )};

export default Routes;
