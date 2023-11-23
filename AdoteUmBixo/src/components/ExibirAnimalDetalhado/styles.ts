import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "yellow",
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
    },
    img: {
        width: "100%",
        resizeMode: "contain",
        height: "100%",
    },
    texto: {

    },
})