import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "auto",
        backgroundColor: GlobalStyle.branco.color,
        alignItems: "center"
    },
    content:{
        flex: 1, 
        paddingTop: 8,
        height: "100%",
        width: "100%",
    },
    botaoContainer: {
        justifyContent: "center",
        flex: 0.1,
        width: "100%",
        alignItems: "center",
        backgroundColor: GlobalStyle.azul.color
    },
    botao: {
        height: 50,
    }
})