import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cadastro = ({navigation}: any) => {


    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('Home')}>Cadastro</Text>
        </SafeAreaView>
    )
}

export default Cadastro