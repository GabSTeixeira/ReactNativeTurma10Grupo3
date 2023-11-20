import { StyleSheet } from 'react-native';
import GlobalStyle from "../../globalStyle/GlobalStyle";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  
  logo: {
    width: 120,
    height: 120
  },
  input: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    borderColor: GlobalStyle.opala.color,
    marginBottom: 16,
    backgroundColor: GlobalStyle.branco.color,
 
  },
  loginButton: {
    backgroundColor: '#1bbcb6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },

});

export default styles;
