import { Text, View, Image } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const BaseAnimal = ({ name, type, age, description, photos, width, height }: ItemProps) => {
  console.log(width)
  return (
    <View>
      <Text style={GlobalStyle.texto}>Nome do Pet: {name}</Text>
      <Image source={photos} style={{width, height}} />
      <Text style={GlobalStyle.texto}>
        {type}, {age}
      </Text>
      <Text style={GlobalStyle.texto}>Descrição:</Text>
      <Text style={GlobalStyle.texto}>{description}</Text>
    </View>
  )}

type ItemProps = {
  name: string,
  type: string,
  age: string,
  description: string,
  photos: any,
  width: number,
  height: number,
}

// photos[0].small
