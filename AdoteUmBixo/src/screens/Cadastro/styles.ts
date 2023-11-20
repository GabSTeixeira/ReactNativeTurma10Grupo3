import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  tituloCadastro: {
    marginTop: -15,
    fontSize: 40,
    color: GlobalStyle.laranja.color,
    fontWeight: "bold",
    lineHeight: 36,
  },
  caixaTexto: {
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
});