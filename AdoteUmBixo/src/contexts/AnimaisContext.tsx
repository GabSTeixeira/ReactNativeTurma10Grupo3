
import { createContext, useState } from 'react'
import { AnimalApiResponseProps } from '../services/api/axios/Types'


interface AnimaisContextProvider {
    addAnimais: (arrayAnimais: AnimalApiResponseProps[]) => void,
    getAnimais: () => AnimalApiResponseProps[]
}

interface AnimaisProvider {
    children: React.ReactNode
}

export const AnimaisContext = createContext<AnimaisContextProvider>({
    addAnimais: ()=>{},
    getAnimais: ()=>[]
})

export const AnimaisProvider = ({children}: AnimaisProvider) => {
    const [animais, setAnimais] = useState<AnimalApiResponseProps[]>([])

    const getAnimais = (): AnimalApiResponseProps[] => {
        return animais
    }

    const getAnimal = (idInput: number): AnimalApiResponseProps | null => {
        return animais.find(Animal => Animal.id === idInput) || null
    }

    const addAnimais = (arrayAnimais: AnimalApiResponseProps[]) => {
        setAnimais(arrayAnimais)
    }

    return(
        <AnimaisContext.Provider value={{getAnimais, addAnimais}}> 
            {children}
        </AnimaisContext.Provider>
    )
}