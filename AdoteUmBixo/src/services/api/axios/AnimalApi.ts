
import axios from "axios";
import { API_KEY } from '@env'



const ApiAnimal = axios.create({
    headers: {Authorization: `${API_KEY}`},
    baseURL: 'https://api.petfinder.com/v2/'
})


