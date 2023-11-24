import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    bot: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: '100%'
    },
    imageBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
});

export default styles;