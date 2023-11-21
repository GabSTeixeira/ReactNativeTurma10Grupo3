import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  tituloLogin: {
    marginTop: 10,
    fontSize: 36,
    color: GlobalStyle.verde.color,
    fontWeight: "bold",
    lineHeight: 36,
  },
  logo: {
    width: 120,
    height: 120,
  },
  input: {
    marginTop: 7,
    backgroundColor: GlobalStyle.branco.color,
    borderColor: GlobalStyle.opala.color,
    opacity: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
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

export default styles;
