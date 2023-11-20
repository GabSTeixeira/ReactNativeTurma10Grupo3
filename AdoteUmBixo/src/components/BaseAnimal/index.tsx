import { Text, View, Image } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";

export const BaseAnimal = ({ name, type, age, gender, size, status, photos, width, height, flexRow, }: ItemProps) => {
  return (
    <View style={(flexRow)?{flexDirection:"row"}:{}}>
      <Image source={{ uri: photos }} style={{ width, height, ...styles.imagem }} />
      <View>
        <Text style={GlobalStyle.texto}>Nome: {name || '***'}</Text>
        <Text style={GlobalStyle.texto}>Espécie: {type || '***'}</Text>
        <Text style={GlobalStyle.texto}>Fase: {age || '***'}</Text>
        <Text style={GlobalStyle.texto}>Gênero: {gender || '***'}</Text>
        <Text style={GlobalStyle.texto}>Tamanho: {size || '***'}</Text>
        <Text style={GlobalStyle.texto}>Status: {status || '***'}</Text>
      </View>
    </View>
  )};

type ItemProps = {
  name: string;
  type: string;
  age: string;
  gender: string;
  size: string;
  status: string;
  photos: string;
  width: number;
  height: number;
  flexRow: boolean;
};

// photos[0].small
