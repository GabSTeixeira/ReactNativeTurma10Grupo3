
import { createContext, useState } from 'react'
import { AnimalApiResponseProps } from '../services/api/axios/Types'


interface AnimaisContextProvider {
    addAnimais: (arrayAnimais: AnimalApiResponseProps[] | undefined) => void,
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

    const addAnimais = (arrayAnimais: AnimalApiResponseProps[] | undefined) => {

        if (arrayAnimais !== undefined) {
            const animaisComFotoEFull = arrayAnimais.filter(animal => 
                Array.isArray(animal.photos) &&
                animal.photos?.length > 0 &&
                animal.photos.some(photo => photo.full !== undefined)
            );
            
            if (animaisComFotoEFull.length > 100) {
                
                let apenasCem = animaisComFotoEFull.slice(0, 99)
                setAnimais(apenasCem)
            } else {

                setAnimais(animaisComFotoEFull);
            }

        }
    }

    return(
        <AnimaisContext.Provider value={{getAnimais, addAnimais}}> 
            {children}
        </AnimaisContext.Provider>
    )
}