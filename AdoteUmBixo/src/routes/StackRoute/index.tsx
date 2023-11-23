import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
import TabRoutes from "../TabBarRoute";
import Animal from "../../screens/Animal";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity, Text } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";


export const Stack = createNativeStackNavigator()

const StackRoutes = () => {

 



    const navigation = useNavigation();
    const infoColor = GlobalStyle.laranja.color
    return (
            <Stack.Navigator screenOptions={{
                headerShown: true, 
                headerStyle: {
                    backgroundColor: GlobalStyle.azul.color
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.pop())}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size={24}
                            color={infoColor}
                            style={{ margin: 10 }}
                        />
                    </TouchableOpacity>
                ),
                headerTintColor: infoColor    
            }}>
                <Stack.Screen
                    name="Tab"
                    component={TabRoutes}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                        name="Animal"
                        component={Animal}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />
            </Stack.Navigator>
    )
}

export default StackRoutes