
import { createContext, useState } from 'react'
import { UserProps } from '../services/api/dbjson/types'


interface LoginContextProvider {
    addUserLogado: (user: UserProps) => void,
    getUserLogado: () => UserProps
}

interface LoginProvider {
    children: React.ReactNode
}

export const LoginContext = createContext<LoginContextProvider>({
    addUserLogado: () => {},
    getUserLogado: () => ({} as UserProps)
})

export const LoginProvider = ({children}: LoginProvider) => {
    const [userLogado, setUserLogado] = useState<UserProps>({} as UserProps)

    const addUserLogado = (user: UserProps): void => {
        setUserLogado(user)
    }

    const getUserLogado = (): UserProps => {
        return userLogado
    }

    return (
        <LoginContext.Provider value={{addUserLogado, getUserLogado}}>
            {children}
        </LoginContext.Provider>
    )
}
