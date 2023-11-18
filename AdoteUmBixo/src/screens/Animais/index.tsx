import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { BaseAnimal } from "../../components/BaseAnimal";
import { styles } from "./styles";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { carregarAnimais } from "../../services/api/axios/AnimalApi";
import { AnimaisApiResponse } from "../../services/api/axios/Types";

const Animais = ({ navigation }: any) => {
  const [animais, setAnimais] = useState<AnimaisApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const animais = await carregarAnimais();
      console.log(animais)
      if (animais) {
        setAnimais(animais);
      }
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
        <Text style={[GlobalStyle.titulo, { color: GlobalStyle.branco.color }]}>
          Animais para Adoção
        </Text>
      </View>
      <FlatList
        data={animais?.animals || []}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Animal", item.id)}
            style={styles.lista}
          >
            <BaseAnimal
              flexRow={true}
              photos={item.photos?.[0]?.small}
              name={item.name}
              type={item.type}
              age={item.age}
              description={item.description}
              width={100}
              height={100}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Animais;
