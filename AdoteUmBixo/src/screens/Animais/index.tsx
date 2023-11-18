import {
  FlatList,
  ScrollView,
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

  const {} = useContext(AnimaisContext)

  return (
    <SafeAreaView>
      {loading ? <Text> carregando... </Text> : (<>
      <View>
        <Text style={GlobalStyle.titulo}>Animais para Adoção</Text>
      </View>
        
        {<FlatList
          data={getAnimais()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Animal', item.id)} style={styles.lista}>
              <BaseAnimal
                photos={item.photos?.[0]?.full}
                name={item.name}
                type={item.type}
                age={item.age}
                description={item.description}
                width={100}
                height={150}
                />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        }
      </>)}
    </SafeAreaView>
    )};

export default Animais
