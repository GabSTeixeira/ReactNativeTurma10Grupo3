import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        minHeight: 650,
        maxWidth: "100%",
        backgroundColor: "yellow",
        gap: 5,
        // backgroundColor: GlobalStyle.branco.color,
    },
    imgContainer: {
        flex: 1,
        height: 350,
        // backgroundColor: GlobalStyle.branco.color,
        backgroundColor: "green",
    }, 
    infoContainer: {
        // backgroundColor: "red",
        flex: 1,
        padding: 6,
    },
    img: {
        width: "100%",
        resizeMode: "contain",
        height: "100%",
    },
    titulo: {
        fontSize: 35,
        alignSelf: "center",
    },
    texto: {
        
    },
    descricao: {
        textAlign: "justify",
    },
    email: {
        color: "blue",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15,
    },
})