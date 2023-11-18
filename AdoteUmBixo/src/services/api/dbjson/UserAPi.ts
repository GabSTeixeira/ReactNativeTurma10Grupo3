
import axios from "axios";
import { UserProps } from "./types";


const ApiUser = axios.create({
    baseURL: 'http://localhost:8080'
})


export const carregarUsers = async (): Promise<UserProps[] | null> => {
    try {
        const response = await ApiUser.get('/users')
        
        return response.data
    } catch (error) {
        console.log('Não foi possível carregar os usuarios')
        return null    
    }
}

export const incluirUser = async (user:UserProps):Promise<boolean> => {
    try {
        ApiUser.post('/users', user)
        
        return true
    } catch (error) {
        console.log('Um problema ocorreu durante o registro de usuario')
        return false
    }
}