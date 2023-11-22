import { Text, View, Image } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";

export const BaseAnimal = ({ name, type, age, description, photos, width, height, flexRow, }: ItemProps) => {
  return (
    <View style={(flexRow)?{flexDirection:"row"}:{}}>
      <Image source={{ uri: photos }} style={{ width, height, ...styles.imagem }} />
      <View>
        <Text style={GlobalStyle.texto}>Nome: {name || '***'}</Text>
        <Text style={GlobalStyle.texto}>{type || '***'}</Text>
        <Text style={GlobalStyle.texto}>{age || '***'}</Text>
        <Text style={GlobalStyle.texto}>Descrição:</Text>
        <Text style={GlobalStyle.texto}>{description || '***'}</Text>
      </View>
    </View>
  )};

type ItemProps = {
  name: string;
  type: string;
  age: string;
  description: string;
  photos: string;
  width: number;
  height: number;
  flexRow: boolean;
};

// photos[0].small
