// Importações necessárias
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  label: {
    fontSize: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: '95%',
    borderRadius: 30,
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: '#1bbcb6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
