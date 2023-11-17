import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { BaseAnimal } from "../../components/BaseAnimal";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";

export const Animais = () => {
  const data = [
    {
      id: "1",
      name: "Thor",
      type: "Dog",
      age: "5",
      description: "Cachorro doméstico",
      photos:
        "https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100",
    },
    {
      id: "1",
      name: "Thor",
      type: "Dog",
      age: "5",
      description: "Cachorro doméstico",
      photos:
        "https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100",
    },
    {
      id: "1",
      name: "Thor",
      type: "Dog",
      age: "5",
      description: "Cachorro doméstico",
      photos:
        "https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100",
    },
    {
      id: "1",
      name: "Thor",
      type: "Dog",
      age: "5",
      description: "Cachorro doméstico",
      photos:
        "https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100",
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={GlobalStyle.titulo}>Animais para Adoção</Text>
      </View>
      <ScrollView>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.lista}>
              <BaseAnimal
                photos={item.photos}
                name={item.name}
                type={item.type}
                age={item.age}
                description={item.description}
                width={100}
                height={150}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  )};
