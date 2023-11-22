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
    marginTop: 10,
    fontSize: 36,
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
  textoBotao: {
    color: GlobalStyle.fullBranco.color,
    fontWeight: "bold",
    textShadowColor: GlobalStyle.fullPreto.color,
    textShadowRadius: 5,
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
});
