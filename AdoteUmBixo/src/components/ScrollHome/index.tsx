import React from "react";
import { ScrollView, Text, View } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import styles from "./styles";

const ScrollHome = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={GlobalStyle.titulo}>Adote um bicho</Text>
          <Text>Encontre o seu melhor amigo!</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[GlobalStyle.texto, styles.texto]}>
            {"\n"}A Adote um Bixo é uma organização que ajuda animais a
            encontrar um lar. A organização tem vários animais de todas as
            idades, tamanhos, cores e personalidades. Se você está procurando um
            companheiro para brincar e relaxar, nós temos o bixo certo para
            você! A adoção é um ato de amor e responsabilidade. Ao adotar um
            animal, você está dando a ele uma nova chance de vida e felicidade.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.footer}>Não temos girafas!!</Text>
        </View>
      </View>
    </ScrollView>
  )};

export default ScrollHome;
