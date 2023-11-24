import React from "react";
import { ScrollView, Text, View, Linking } from "react-native";
import { Button } from "../../components/Button";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";
import { AnimalApiResponseProps } from "../../services/api/axios/Types";
import ExibirAnimalDetalhado from "../../components/ExibirAnimalDetalhado";

const Animal = ({navigation, route}: any) => {
    const item = route.params as AnimalApiResponseProps

    const handleAdotar=() => {
        Linking.openURL(item.url)
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <ExibirAnimalDetalhado 
                    nome={item.name}
                    raca={item.breeds.primary}
                    genero={item.gender}
                    tamanho={item.size}
                    descricao={item.description}
                    email={item.contact.email}
                    img={item.photos?.[0]?.full}
                    pais={item.contact.address.country}
                    estado={item.contact.address.state}
                    cidade={item.contact.address.city}
                />
            </View>
            <View style={styles.botaoContainer}>
                <Button buttonStyle={[{backgroundColor: GlobalStyle.laranja.color}, styles.botao]} onPress={handleAdotar}>
                    <Text style={[GlobalStyle.titulo, {color: GlobalStyle.azul.color}]}>Adote-me</Text>
                </Button >
            </View>
        </View>
    )
}
export default Animal
