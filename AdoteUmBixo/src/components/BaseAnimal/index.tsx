import { Text, View, Image } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const BaseAnimal = ({ name, type, age, description, photos, width, height }: ItemProps) => {
  return (
    <View>
      <Text style={GlobalStyle.texto}>Nome do Pet: {name}</Text>
      <Image source={{uri: photos}} style={{width, height}} />
      <Text style={GlobalStyle.texto}>
        {type}
      </Text>
      <Text style={GlobalStyle.texto}>{age}</Text>
      <Text style={GlobalStyle.texto}>Descrição:</Text>
      <Text style={GlobalStyle.texto}>{description}</Text>
    </View>
  )}

type ItemProps = {
  name: string,
  type: string,
  age: string,
  description: string,
  photos: string,
  width: number,
  height: number
}

// photos[0].small
