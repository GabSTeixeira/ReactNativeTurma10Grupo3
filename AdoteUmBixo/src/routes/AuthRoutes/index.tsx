import React from 'react';
import Login from '../../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthRoutes;