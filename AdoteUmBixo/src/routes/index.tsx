import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./TabBarRoute";
import StackRoutes from "./StackRoute";



const Routes = () => {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}

export default Routes