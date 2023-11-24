
import axios from "axios";
import { CLIENT_SECRET, CLIENT_ID } from '@env'
import { AnimaisApiResponseProps, requisicaoTokenProps, ultimoAcessoProps } from "./Types";
import AsyncStorage from "@react-native-async-storage/async-storage";


let TOKEN = ''
const multiPartForm = new FormData();
multiPartForm.append('grant_type', 'client_credentials');
multiPartForm.append('client_id', `${CLIENT_ID}`);
multiPartForm.append('client_secret', `${CLIENT_SECRET}`);




const ApiAnimal = axios.create({
    //petFinder api
     baseURL: 'https://api.petfinder.com/v2'
})
    
const requisitarToken = async () => {
        
    const response = (await axios.post('https://api.petfinder.com/v2/oauth2/token', multiPartForm , {
        headers: {'Content-Type': 'multipart/form-data'}
    })).data as requisicaoTokenProps
    
    TOKEN = `${response.token_type} ${response.access_token}`
    
    try {
        await AsyncStorage.setItem('@ultimoAcesso',JSON.stringify({
            data: new Date().valueOf(),
            token: response.access_token,
            tipoToken: response.token_type,
            validade: (response.expires_in * 1000)
        } as ultimoAcessoProps))
        
        return true
    } catch (error) {
        console.error("Não foi possivel salvar a sessão: "+error)
        return false
    }
}
    
    
const verificarAcesso = async (): Promise<boolean> => {
    const ultimoAcessoJson = await AsyncStorage.getItem("@ultimoAcesso")
    
    if(ultimoAcessoJson !== null) {
        const ultimoAcesso = JSON.parse(ultimoAcessoJson) as ultimoAcessoProps
        const dataAtual = new Date().valueOf()

        if (dataAtual < ultimoAcesso.data + ultimoAcesso.validade) {
            TOKEN = `${ultimoAcesso.tipoToken} ${ultimoAcesso.token}`
            console.log('ainda da pra usar')
            
            return true
        } 
    }

    return false
}  
    
    
    
export const carregarAnimais = async (): Promise<AnimaisApiResponseProps | null> => {

    //logCurrentStorage()

    if (!(await verificarAcesso())) {  
        try {
            const tokenGerado = await requisitarToken()

            if (tokenGerado) {
                console.log(`Novo Token Gerado:  ...${TOKEN.slice(TOKEN.length-10,TOKEN.length)}`)
            } else {
                console.error('Não foi possivel gerar um novo token, verifique seu Id e Secret da api petfinder')
                return null
            }
        } catch(error) {
            console.error(error)
            
            return null
        }
    }
    
    try {
        console.log(`Token Atual:  ...${TOKEN.slice(TOKEN.length-10,TOKEN.length)}`)
        const animais = (await ApiAnimal.get('/animals', {
            headers: {Authorization: TOKEN},
            params: {
                limit: 100
            }
        })).data as AnimaisApiResponseProps
        
        return animais
    } catch (error) {

        console.error('Não foi possivel fazer a requisição de animais')
        return null
    }
}


