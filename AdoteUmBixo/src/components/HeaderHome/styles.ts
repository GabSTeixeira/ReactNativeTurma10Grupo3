import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
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
