
import { useState } from "react";
import Routes from "./src/routes"

export default function App() {
  const [loading, setLoading] = useState<boolean>(true)
  //const [animais, setAnimais] = useState<AnimalApiResponse[]>([])



  return (
      <Routes />
  );
}
