import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  botao: {
    width: "40%",
    height: "40%",
    borderRadius: 40,
  },
  texto: {
    fontWeight: 'bold',
  }
});
