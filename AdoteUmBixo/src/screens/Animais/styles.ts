import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:GlobalStyle.branco.color,
        margin: 15,
    },
    titulo: {
        alignItems: "center",
        backgroundColor: GlobalStyle.azul.color,
        color: GlobalStyle.branco.color,
        padding: 20,
        borderRadius: 8,
        marginBottom: 15,
    },
    lista: {
        borderColor: GlobalStyle.fullPreto.color,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 5
    },
   
})