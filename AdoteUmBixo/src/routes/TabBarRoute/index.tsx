import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AnimaisProvider } from '../../contexts/AnimaisContext'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouseFlag, faDog } from '@fortawesome/free-solid-svg-icons'
import Animais from '../../screens/Animais'
import Home from '../../screens/Home'
import GlobalStyle from '../../globalStyle/GlobalStyle'

const Tab = createBottomTabNavigator()

const TabRoutes = () => {
    return (
        <AnimaisProvider>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: GlobalStyle.verde.color,
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                }
            }}>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <FontAwesomeIcon icon={faHouseFlag} size={size} color={color}/>
                        ),
                        tabBarLabel: 'Inicio'
                    }}
                    />
                <Tab.Screen
                    name='Animais'
                    component={Animais}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <FontAwesomeIcon icon={faDog} size={size} color={color}/>
                        ),
                        tabBarLabel: 'Animais'
                    }}
                    />
            </Tab.Navigator>
        </AnimaisProvider>
    )
}

export default TabRoutes
