import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 25,
        padding: 5,
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: GlobalStyle.branco.color,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      icon: {
        marginRight: 10,
        color: GlobalStyle.opala.color,
      },
    })