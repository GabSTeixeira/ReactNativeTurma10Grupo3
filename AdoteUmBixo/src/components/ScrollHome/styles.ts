import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyle/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: GlobalStyle.branco.color,
  },
  content: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
  },
  textContainer: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    textAlign: "justify",
  },
  footer: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
});
export default styles;
