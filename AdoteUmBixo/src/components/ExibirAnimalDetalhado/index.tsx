import { View, Text, Image } from "react-native"
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
      <View style={styles.infoContainer}>
        <Text style={[GlobalStyle.titulo, styles.titulo]}>{nome}</Text>
        <Text style={GlobalStyle.texto}>{raca}</Text>
        <Text style={GlobalStyle.texto}>{genero}</Text>
        <Text style={GlobalStyle.texto}>{tamanho}</Text>
        <Text style={[GlobalStyle.texto, styles.descricao]}>{"\n"}{descricao}</Text>
        <Text style={GlobalStyle.texto}>{cidade}, {estado} - {pais}</Text>
        <Text style={[GlobalStyle.texto, styles.email]}>{email}</Text>
      </View>
    </View>
  )
};

export default ExibirAnimalDetalhado;
