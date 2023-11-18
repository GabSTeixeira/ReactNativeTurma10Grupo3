
import { useState } from "react";
import Routes from "./src/routes"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function App() {
  const [loading, setLoading] = useState<boolean>(true)
  //const [animais, setAnimais] = useState<AnimalApiResponseProps[]>([])

  


  return (
      <Routes />
  );
}
