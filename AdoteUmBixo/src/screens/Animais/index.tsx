import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useContext, useEffect, useState } from 'react'
import { BaseAnimal } from "../../components/BaseAnimal";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimaisContext } from "../../contexts/AnimaisContext";
import { carregarAnimais } from "../../services/api/axios/AnimalApi";

const Animais = ({navigation}: any) => {
  const [loading, setLoading] = useState<boolean>(true)
  const { addAnimais, getAnimais } = useContext(AnimaisContext)

  useEffect(() => {
    carregarAnimais().then(res=> {addAnimais(res?.animals)}).then(()=>setLoading(false)).catch(res=> {console.log(res); setLoading(true)})
  },[])


  return (
        <SafeAreaView style={styles.container}>
        <View style={styles.titulo}>
          <Text style={[GlobalStyle.titulo, { color: GlobalStyle.branco.color }]}>
            Animais para Adoção
          </Text>
        </View>
        <FlatList
          data={getAnimais()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Animal", item.id)}
              style={styles.lista}
            >
              <BaseAnimal
                flexRow={true}
                photos={item.photos?.[0]?.full}
                name={item.name}
                type={item.type}
                age={item.age}
                gender={item.gender}
                size={item.size}
                status={item.status}
                width={100}
                height={100}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    )
};

export default Animais
