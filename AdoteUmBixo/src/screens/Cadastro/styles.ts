import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  content: {
    alignItems: "center",
    padding: 5
  },
  titulo: {
    marginTop: 10,
    fontSize: 36,
    lineHeight: 36,
    fontWeight: "bold",
    color: GlobalStyle.laranja.color,
  },
  input: {
    marginTop: 7,
    backgroundColor: GlobalStyle.branco.color,
    borderColor: GlobalStyle.opala.color,
    opacity: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  textoBotao: {
    color: GlobalStyle.fullBranco.color,
    fontWeight: "bold",
    textShadowRadius: 5,
    textShadowColor: GlobalStyle.fullPreto.color,
  }
});
