import { StyleSheet } from 'react-native';
import GlobalStyle from "../../globalStyle/GlobalStyle";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        backgroundColor: GlobalStyle.branco.color,
        padding: 35,
        borderRadius: 20,
        margin: 5,
        justifyContent: 'center',
        alignItens: 'center'
    },
    logo: {
        width: 150,
        height: 150,
    },

    login: {
        backgroundColor: GlobalStyle.verde.color,
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: '50%',
        alignItems: 'center'
    },
    cadastro: {
        backgroundColor: GlobalStyle.laranja.color,
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: '50%',
        alignItems: 'center'
    },
});

export default styles;