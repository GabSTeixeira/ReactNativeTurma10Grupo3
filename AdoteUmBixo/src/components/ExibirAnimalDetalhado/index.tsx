import { View, Text, Image } from "react-native"
import { styles } from "./styles";

interface AnimalDetalhadoProps {
  img: string;
  nome: string;
  raca: string;
  genero: string;
  tamanho: string;
  descricao: string;
  email: string;
}

const ExibirAnimalDetalhado = ({
  img,
  nome,
  raca,
  genero,
  tamanho,
  descricao,
  email,
}: AnimalDetalhadoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: img }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.texto}>{nome}</Text>
        <Text style={styles.texto}>{raca}</Text>
        <Text style={styles.texto}>{genero}</Text>
        <Text style={styles.texto}>{tamanho}</Text>
        <Text style={styles.texto}>{descricao}</Text>
        <Text style={styles.texto}>{email}</Text>
      </View>
    </View>
  )
};

export default ExibirAnimalDetalhado;
