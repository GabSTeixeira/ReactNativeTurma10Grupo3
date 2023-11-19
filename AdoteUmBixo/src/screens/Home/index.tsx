
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home: React.FC  = ({navigation}: any) => {


    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('Login')}>Login</Text>
            <Text onPress={() => navigation.navigate('Cadastro')}>Cadastro</Text>
        </SafeAreaView>

    )
}

export default Home