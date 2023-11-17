
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Animal = ({navigation}: any) => {


    return (
        <SafeAreaView>
            <Text onPress={()=> navigation.navigate('Home')}>Animal</Text>
        </SafeAreaView>
    )
}

export default Animal