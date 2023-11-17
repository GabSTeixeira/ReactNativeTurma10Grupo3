import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { carregarAnimais } from './src/services/api/axios/AnimalApi';
import { AnimalApiResponse } from './src/services/api/axios/Types';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [animais, setAnimais] = useState<AnimalApiResponse[]>([])




  return (
    <SafeAreaView>

  
      
      <StatusBar style="auto" />
   
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
