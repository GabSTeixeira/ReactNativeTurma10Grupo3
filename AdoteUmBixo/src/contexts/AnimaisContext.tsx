
import { createContext, useState } from 'react'
import { AnimalApiResponseProps } from '../services/api/axios/Types'


interface AnimaisContextProvider {
    addAnimais: (arrayAnimais: AnimalApiResponseProps[] | undefined) => boolean,
    getAnimais: () => AnimalApiResponseProps[]
}

interface AnimaisProvider {
    children: React.ReactNode
}

export const AnimaisContext = createContext<AnimaisContextProvider>({
    addAnimais: ()=>false,
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

    const addAnimais = (arrayAnimais: AnimalApiResponseProps[] | undefined): boolean => {

        if (arrayAnimais !== undefined) {
            const animaisComFotoEFull = arrayAnimais.filter(animal => 
                Array.isArray(animal.photos) &&
                animal.photos?.length > 0 &&
                animal.photos.some(photo => photo.full !== undefined)
            );
            
        
            setAnimais(animaisComFotoEFull);
            
            return true
        }

        return false
    }

    return(
        <AnimaisContext.Provider value={{getAnimais, addAnimais}}> 
            {children}
        </AnimaisContext.Provider>
    )
}