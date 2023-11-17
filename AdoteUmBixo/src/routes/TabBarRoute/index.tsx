import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../screens/Home'
import Login from '../../screens/Login'
import App from '../../../App'
import StackRoutes from '../StackRoute'
import Animal from '../../screens/Animal'
import Animais from '../../screens/Animais'

const Tab = createBottomTabNavigator()


const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Animais'
                component={Animais}
            />
            
        </Tab.Navigator>
    )
}

export default TabRoutes
