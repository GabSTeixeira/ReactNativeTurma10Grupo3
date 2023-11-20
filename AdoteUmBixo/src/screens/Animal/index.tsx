
// import { Text } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const Animal = ({navigation}: any) => {


//     return (
//         <SafeAreaView>
//             <Text onPress={()=> navigation.navigate('Home')}>Animal</Text>
//         </SafeAreaView>
//     )
// }

// export default Animal

import React, { useState, useEffect } from 'react';
import { Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Animal = ({ navigation }: any) => {
  // Estado para armazenar os dados da API (imagem e texto)
  const [data, setData] = useState<{ imageUrl: string; text: string } | null>(null);

  useEffect(() => {
    // Função assíncrona para buscar a imagem e o texto da API
    const fetchData = async () => {
      try {
        // Faz uma solicitação à API
        const response = await fetch('https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100');

        // Verifica se a solicitação foi bem-sucedida (código de status 200-299)
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        // Converte a resposta para JSON
        const result = await response.json();

        // Atualiza o estado com os dados da API
        setData({
          imageUrl: result.imageUrl, // Substitua 'result.imageUrl' pela chave real que contém a URL da imagem na resposta da sua API
          text: result.text, // Substitua 'result.text' pela chave real que contém o texto na resposta da sua API
        });
      } catch (error) {
        // Captura e imprime erros ocorridos durante a solicitação da API
        console.error('Erro na solicitação da API:', error.message);
      }
    };

    // Chama a função para buscar os dados quando o componente é montado
    fetchData();
  }, []); // A dependência vazia significa que este efeito ocorre apenas uma vez, semelhante a componentDidMount

  // Renderiza o componente com base nos dados da API
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Home')}>Animal</Text>

      {data ? (
        // Verifica se há dados para exibir
        <View>
          <Image source={{ uri: 'https://dl5zpyw5k3jeb.cloudfront.net//photos//pets//69705496//1//?bust=1700161169&width=100' }} style={{ width: 200, height: 200 }} />
          <Text>{data.text}</Text>
        </View>
      ) : (
        <Text>Carregando dados...</Text>
      )}
    </SafeAreaView>
  );
};

export default Animal;
