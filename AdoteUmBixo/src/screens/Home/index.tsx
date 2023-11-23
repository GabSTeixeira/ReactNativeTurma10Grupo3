import { useContext, useState, useEffect} from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import styles from "./styles";
import logo from "../../assets/images/Logo.png";
import { Button } from "../../components/Button";
import girafa from "../../assets/images/girafa.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginContext } from "../../contexts/LoginContext";
import { UserProps } from "../../services/api/firebase/Types";
import { queryLogin } from "../../services/api/firebase/UserAPi";

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
    <ImageBackground style={[styles.background, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} source={girafa} imageStyle=
    {{ opacity: 1 }}
    resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={[styles.content, {gap: 15, justifyContent: 'flex-start', alignItems: 'center'}]}>
          <View style={{flexDirection: 'row', width: '100%', alignItems: "center", justifyContent: 'space-around'}}>
            <Image style={styles.logo} source={logo} />
            <View style={{ flexDirection: 'row', justifyContent: ((getLogado())?'flex-end':'center'), gap: 10, width: '70%'}}>
              {(getLogado()) ? (
                    <Button buttonStyle={[styles.botao, {backgroundColor: GlobalStyle.rosa.color}]} onPress={handleDeslogar}>
                      <Text style={{ color: GlobalStyle.branco.color, fontWeight: 'bold' }}>Deslogar</Text>
                    </Button>
              ) : (
                  <>
                    <Button buttonStyle={[styles.botao, {backgroundColor: GlobalStyle.verde.color}]} onPress={() => navigation.navigate('Login')}>
                      <Text style={{ color: GlobalStyle.branco.color, fontWeight: 'bold' }}>Login</Text>
                    </Button>
                    <Button buttonStyle={[styles.botao, {backgroundColor: GlobalStyle.laranja.color}]} onPress={() => navigation.navigate('Cadastro')}>
                      <Text style={{ color: GlobalStyle.branco.color, fontWeight: 'bold' }}>Cadastro</Text>
                    </Button>
                  </>
                )
              }
            </View>
          </View>
        </View>
        <View style={styles.content}>
            <View style={styles.textContainer}>
              <ScrollView>
                <Text style={[GlobalStyle.titulo, {textAlign: 'center'}]}>Adote um bicho</Text>
                <Text style={{alignSelf: 'center'}}>Encontre o seu melhor amigo!</Text>
                <Text style={[GlobalStyle.texto, {textAlign: 'justify'}]}>
                  {"\n"}
                  A adote um bixo é uma organização que ajuda animais a encontrar um lar. A organização tem vários animais de todas as idades, tamanhos, cores e personalidades. Se você está procurando um companheiro para brincar e relaxar, nós temos o bixo certo para você! A adoção é um ato de amor e responsabilidade. Ao adotar um animal, você está dando a ele uma nova chance de vida e felicidade.
                  {"\n"} {"\n"}
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Não temos girafas!!</Text>
              </ScrollView>
            </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;