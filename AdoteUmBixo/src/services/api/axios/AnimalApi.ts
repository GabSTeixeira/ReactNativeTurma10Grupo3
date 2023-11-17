
import axios from "axios";
import { CLIENT_SECRET, CLIENT_ID } from '@env'
import { AnimaisApiResponse, AnimalApiResponse, tokenResponse } from "./Types";
import * as FileSystem from 'expo-file-system'

const apiCallTimeJsonUri = FileSystem.documentDirectory + 'apiCallTime.json'
let TOKEN = ''
const multiPartForm = new FormData();
multiPartForm.append('grant_type', 'client_credentials');
multiPartForm.append('client_id', `${CLIENT_ID}`);
multiPartForm.append('client_secret', `${CLIENT_SECRET}`);



const buscarToken = async (): Promise<void> => {

    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', multiPartForm , {
        headers: {'Content-Type': 'multipart/form-data'}

    } )

    TOKEN = response.data.access_token;

    console.log(TOKEN)

    await FileSystem.writeAsStringAsync(apiCallTimeJsonUri,JSON.stringify({ultimaData: new Date().valueOf(), ultimoToken: TOKEN}))
   
}


const ApiAnimal = axios.create({
    baseURL: 'https://api.petfinder.com/v2'
})


export const carregarAnimais = async (): Promise<AnimaisApiResponse | null> => {  
    
    try {
        
        try {
            // verifica se o arquivo pra controle de requisição existe
            if (await FileSystem.getInfoAsync(apiCallTimeJsonUri)) {
                const requisicaoAnterior = JSON.parse( await FileSystem.readAsStringAsync(apiCallTimeJsonUri))
                /* 
                    se a data atual for maior que a data antiga mais uma hora e o json não estiver vazio
                    gere um novo token. Senão use o anteriormente registrado
                */
                if (Object.keys(requisicaoAnterior).length !== 0 && new Date().valueOf() >= requisicaoAnterior.ultimaData + (3600*1000)) {
                    await buscarToken()
                } else {
                    TOKEN = requisicaoAnterior.ultimoToken
                    console.log(TOKEN)
                }
            } else {
                await buscarToken()
            }
        } catch (error) {
            console.log('serviço fora do ar')
        }
        
        console.log('Token: '+TOKEN.slice(0,10))

        const response = await ApiAnimal.get('/animals', {
            headers: {Authorization: 'Bearer '+TOKEN}
        })


        return response.data;
        
    } catch (error) {
        
        console.log('Problema na requisição de dados')
        buscarToken()

        return null 
    }
}


