import { FlatList, Text, View } from "react-native";
import { BaseAnimal } from "../../components/BaseAnimal";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const Animais = () => {
  const data = [
    {
      id: "1",
      name: "Thor",
      type: "Dog",
      age: "5",
      description: "Cachorro doméstico",
      photos: "https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100",
    },
  ]

  return (
    <View>
        <Text style={GlobalStyle.titulo}>Listagem de Animais</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BaseAnimal
            photos={item.photos}
            name={item.name}
            type={item.type}
            age={item.age}
            description={item.description}
            width={100}
            height={150}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
