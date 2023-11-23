import { useContext, useState, useEffect} from "react";
import { ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import girafa from "../../assets/images/girafa.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginContext } from "../../contexts/LoginContext";
import { UserProps } from "../../services/api/firebase/Types";
import { queryLogin } from "../../services/api/firebase/UserAPi";
import HeaderHome from "../../components/HeaderHome";
import ScrollHome from "../../components/ScrollHome";


const Home = ({ navigation }: any) => {
  const { switchLogado, addUserLogado, getLogado } = useContext(LoginContext)
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(()=> {
    handleVerificarLogin().then(()=> setLoading(false))
  },[])

  const handleDeslogar = async (): Promise<void> => {
    AsyncStorage.removeItem('@user_email')

    switchLogado(false)
    addUserLogado({} as UserProps)
  } 


  const handleVerificarLogin = async (): Promise<boolean> => {

    const userEmail = await AsyncStorage.getItem('@user_email')

    if (!userEmail) {

      switchLogado(false)

      addUserLogado({} as UserProps)

      return false
    }

    const response = await queryLogin(userEmail).then(res => {

      if(res) {
        switchLogado(true)
        addUserLogado(res)

        return true
      } else { 
        switchLogado(false)
        addUserLogado({} as UserProps)

        return false
      }
    }).catch((error) => {
      console.error(error)
      return false
    })

    return response
  }



  if (loading) {
    return <SafeAreaView><Text>Carregando...</Text></SafeAreaView>
  }
  
  return (
    <ImageBackground style={styles.imageBackground} source={girafa} imageStyle=
    {{ opacity: 1 }}
    resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <HeaderHome navigation={navigation}/>
        <ScrollHome />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;