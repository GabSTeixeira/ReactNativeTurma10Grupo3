import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    link: {
        textDecorationLine: 'underline',
        color: GlobalStyle.azul.color,
        fontWeight: 'bold',
    }
})