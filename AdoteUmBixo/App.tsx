
import { useContext, useEffect, useState } from "react";
import { Text } from 'react-native'
import Routes from "./src/routes"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { carregarAnimais } from "./src/services/api/axios/AnimalApi";
import { AnimaisContext } from "./src/contexts/AnimaisContext";

library.add(fas);

export default function App() {
  
  return (
    <Routes />
  );
}
