import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { carregarAnimais } from './src/services/api/axios/AnimalApi';
import { AnimalApiResponse } from './src/services/api/axios/Types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes';


export default function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [animais, setAnimais] = useState<AnimalApiResponse[]>([])


  useEffect(() => {
    carregarAnimais().then(res => setAnimais(res?.animals || []))
  },[])


  return (
      <Routes />
  );
}
