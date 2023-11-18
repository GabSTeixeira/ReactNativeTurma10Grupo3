import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cadastro = ({navigation}: any) => {


    return (
            <Text onPress={() => navigation.navigate('Home')}>Cadastro</Text>
    )
}

export default Cadastro