import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: 650,
        maxWidth: "100%",
        gap: 5,
        marginTop: 10,
        backgroundColor: GlobalStyle.fullBranco.color
    },
    imgContainer: {
        flex: 1,
        height: 'auto',
        width: '90%',
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: GlobalStyle.branco.color,
        
    }, 
    infoContainer: {
        flex: 1,
        width: '90%',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        backgroundColor: GlobalStyle.branco.color
    },
    img: {
        width: "100%",
        borderRadius: 20,
        resizeMode: "cover",
        height: "100%",
    },
    titulo: {
        fontSize: 30,
        alignSelf: "center",
    },
    texto: {
        fontSize: 16
    },
    atributos: {
        marginTop: '10%',
        justifyContent: 'space-around'
    },
    descricao: {
        textAlign: "justify",
        fontSize: 17,
        marginTop: 10
    },
    email: {
        color: "blue",
        fontWeight: "bold",
        alignSelf: "center",
        verticalAlign: 'bottom',
        fontSize: 15,
        marginBottom: 20
    },
})