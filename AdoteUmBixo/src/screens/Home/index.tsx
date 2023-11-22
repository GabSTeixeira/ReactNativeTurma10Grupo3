import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

      
      <Text style={styles.titulo}>Adote um bicho</Text>
      <Text style={styles.descricao}>
        Encontre o seu melhor amigo!
        A adote um bixo é uma organização que ajuda animais a encontrar um lar. A organização tem vários animais de todas as idades, tamanhos, cores e personalidades. Se você está procurando um companheiro para brincar e relaxar, nós temos o bixo certo para você! A adoção é um ato de amor e responsabilidade. Ao adotar um animal, você está dando a ele uma nova chance de vida e felicidade.
      </Text>
    </SafeAreaView>
  );
};
  
  export default Home;