
import { createContext, useState } from 'react'
import { UserProps } from '../services/api/firebase/Types'


interface LoginContextProvider {
    addUserLogado: (user: UserProps) => void,
    getUserLogado: () => UserProps | null,
    switchLogado: (estado: boolean) => void
    getLogado: () => boolean    
}

interface LoginProvider {
    children: React.ReactNode
}

export const LoginContext = createContext<LoginContextProvider>({
    addUserLogado: () => {},
    getUserLogado: () => (null),
    switchLogado: () => {},
    getLogado: () => false
})

export const LoginProvider = ({children}: LoginProvider) => {
    const [userLogado, setUserLogado] = useState<UserProps | null>(null)
    const [logado, setLogado ] = useState<boolean>(false)

    const addUserLogado = (user: UserProps): void => {
        setUserLogado(user)
    }

    const getUserLogado = (): UserProps | null => {
        
        if (logado) {
            return userLogado
        } 
        
        return null

    }

    const switchLogado = (estado: boolean): void => {
        setLogado(estado)
    }

    const getLogado = (): boolean => {
        return logado
    }

    return (
        <LoginContext.Provider value={{addUserLogado, getUserLogado, switchLogado ,getLogado}}>
            {children}
        </LoginContext.Provider>
    )
}
