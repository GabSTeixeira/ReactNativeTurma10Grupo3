
import { Text } from 'react-native'

const Animal = ({navigation}: any) => {


    return (
            <Text onPress={()=> navigation.navigate('Home')}>Animal</Text>
    )
}

export default Animal