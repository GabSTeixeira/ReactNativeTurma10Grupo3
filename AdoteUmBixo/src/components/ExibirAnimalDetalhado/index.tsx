import { View, Text, Image, ScrollView } from "react-native"
import { styles } from "./styles";
import GlobalStyle from "../../globalStyle/GlobalStyle";

interface AnimalDetalhadoProps {
  img: string;
  nome: string;
  raca: string;
  genero: string;
  pais: string;
  estado: string;
  cidade: string;
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
  pais,
  estado,
  cidade,
}: AnimalDetalhadoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: img }} />
      </View>
      <ScrollView style={styles.infoContainer} contentContainerStyle={styles.scrollContent}>
          <Text style={[GlobalStyle.titulo, styles.titulo]}>{nome}</Text>
          <View style={styles.atributos}>
              <Text style={styles.texto}>Raça: {raca}</Text>
              <Text style={styles.texto}>Genero: {genero}</Text>
              <Text style={styles.texto}>Tamanho: {tamanho}</Text>
              <Text style={styles.texto}>{cidade}, {estado} - {pais}</Text>
          </View>
          <Text style={[styles.texto, styles.descricao]}>{descricao}</Text>
          <Text style={[styles.texto, styles.email]}>{email}</Text>
      </ScrollView>
    </View>
  )
};

export default ExibirAnimalDetalhado;
