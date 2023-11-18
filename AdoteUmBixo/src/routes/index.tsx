import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./TabBarRoute";
import StackRoutes from "./StackRoute";
import AuthRoutes from "./AuthRoutes";



const Routes: React.FC = () => {
    return (
        // <NavigationContainer>
        //     <StackRoutes />
        // </NavigationContainer>
        <AuthRoutes />
    )
}

export default Routes