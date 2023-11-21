import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import styles from "./styles";
import logo from "../../assets/images/Logo.png";
import { Button } from "../../components/Button";
import dog from "../../assets/images/doguinho.jpg";

const Home: React.FC = ({ navigation }: any) => {
  return (
    <ImageBackground style={[styles.background, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} source={dog} imageStyle=
      {{ opacity: 0.5 }}>
      <SafeAreaView >
        <SafeAreaView style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
          <Button style={styles.login} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: GlobalStyle.branco.color, fontWeight: 'bold' }}>Login</Text>
          </Button>
          <Button style={styles.cadastro} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{ color: GlobalStyle.azul.color, fontWeight: 'bold' }}>Cadastro</Text>
          </Button>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <SafeAreaView>
          <Image style={styles.logo} source={logo} />
        </SafeAreaView>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <SafeAreaView style={styles.textContainer}>
              <Text style={GlobalStyle.texto}>
                Adote um bicho
                {"\n"} {"\n"}
                Encontre o seu melhor amigo!
                {"\n"} {"\n"}
                A adote um bixo é uma organização que ajuda animais a encontrar um lar. A organização tem vários animais de todas as idades, tamanhos, cores e personalidades. Se você está procurando um companheiro para brincar e relaxar, nós temos o bixo certo para você! A adoção é um ato de amor e responsabilidade. Ao adotar um animal, você está dando a ele uma nova chance de vida e felicidade.
              </Text>
            </SafeAreaView>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;