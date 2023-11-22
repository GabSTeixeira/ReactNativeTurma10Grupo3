import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseAnimal } from "../../components/BaseAnimal";
import { Button } from "../../components/Button";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import { styles } from "./styles";

const Animal = ({navigation, route}: any) => {
    const item = route.params;

    const handleVoltarLista=() => {
        navigation.navigate("Animais")
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.context}>
                <BaseAnimal
                flexRow={false}
                photos={item.photos?.[0]?.full}
                name={item.name}
                type={item.type}
                age={item.age}
                gender={item.gender}
                size={item.size}
                status={item.status}
                width={300}
                height={300}
                />
                <Text style={[styles.descricao, GlobalStyle.texto]}>Descrição: {item.description || "..."}</Text>
            </View>
            <Button buttonStyle={{backgroundColor: GlobalStyle.azul.color}} onPress={handleVoltarLista}>
                <Text>Animais</Text>
            </Button >
        </SafeAreaView>
    )
}
export default Animal
