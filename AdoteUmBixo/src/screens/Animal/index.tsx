
import { Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { AnimalApiResponseProps } from '../../services/api/axios/Types';

const Animal = ({navigation}: any) => {
const route = useRoute()
    const animal = route.params as AnimalApiResponseProps
    
    
    
    return (
        <>
            <Text onPress={()=> navigation.navigate('Home')}>Animal</Text>
            <Text>{animal.name}</Text>
            <Text>{animal.age}</Text>

            <Image source={{uri:animal?.photos?.[0]?.full}} width={500} height={500}/>
        </>
    )
}
export default Animal
