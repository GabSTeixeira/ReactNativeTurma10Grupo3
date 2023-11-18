import { createNativeStackNavigator } from "@react-navigation/native-stack";



//import TabRoutes from "../TabBarRoute";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
import TabRoutes from "../TabBarRoute";
import Animal from "../../screens/Animal";

const Stack = createNativeStackNavigator()


const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen
                name="Tab"
                component={TabRoutes}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name='Animal'
                component={Animal}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes