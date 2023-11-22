import { StyleSheet } from 'react-native';
import GlobalStyle from "../../globalStyle/GlobalStyle";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    background: {
        flex: 1,
    },
    textContainer: {
        backgroundColor: GlobalStyle.branco.color,
        padding: 35,
        maxHeight: '80%',
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItens: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },

    botao: { 
        width: '40%',
        height: '40%',
        borderRadius: 40
    }

});

export default styles;