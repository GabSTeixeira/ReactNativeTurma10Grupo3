import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '100%',
    maxHeight: 190,
    minHeight: '70%',
    backgroundColor: GlobalStyle.branco.color
  },
  content: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    textAlign: "justify",
    fontSize: 15,
    marginVertical: 20
  },
  titulo: {
    //marginTop: 25
  },
  footer: {
    fontSize: 20,
    fontWeight: "bold",
    //marginTop: 10,
    alignSelf: "center",
  },
});
export default styles;
