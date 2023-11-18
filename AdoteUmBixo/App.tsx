import { useState } from "react";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contexts/AuthContext";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  //const [animais, setAnimais] = useState<AnimalApiResponse[]>([])

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ logined: false }}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  )}
