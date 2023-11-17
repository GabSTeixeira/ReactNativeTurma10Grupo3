
import { SetStateAction, createContext, useState } from 'react'
import { AnimaisApiResponse } from '../services/api/axios/Types'


export const AnimaisContext = createContext<AnimaisContextProvider>({
    animais: [],
    addAnimais: ()=>{}
})

interface AnimaisContextProvider {
    animais: AnimaisApiResponse[],
    addAnimais: (animais: AnimaisApiResponse[]) => void
}

interface AnimaisProvider {
    children: React.ReactNode
}


export const AnimaisProvider = ({children}: AnimaisProvider) => {
    const [animais, setAnimais] = useState<AnimaisApiResponse[]>([])

    const addAnimais = (animais: AnimaisApiResponse[]) => {
        setAnimais(animais)
    }

    return(
        <AnimaisContext.Provider
            value={{animais, addAnimais}}
        > {children} </AnimaisContext.Provider>
    )
}