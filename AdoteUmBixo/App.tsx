import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contexts/AuthContext";
import Routes from "./src/routes"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function App() {
  const [loading, setLoading] = useState<boolean>(true)
  //const [animais, setAnimais] = useState<AnimalApiResponseProps[]>([])


  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ logined: false }}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  )}
