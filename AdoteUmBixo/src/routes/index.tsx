import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoute";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )};

export default Routes;
