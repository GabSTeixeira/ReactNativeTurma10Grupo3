import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Animais = ({navigation}: any) => {


    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('Animal')}>Animal</Text>
        </SafeAreaView>
    )
}

export default Animais