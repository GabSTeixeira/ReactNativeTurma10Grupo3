import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import girafa from "../../assets/images/girafa.jpg";
import HeaderHome from "../../components/HeaderHome";
import ScrollHome from "../../components/ScrollHome";

const Home = () => {
  return (
    <ImageBackground style={styles.imageBackground} source={girafa} imageStyle=
    {{ opacity: 1 }}
    resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <HeaderHome />
        <ScrollHome />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;