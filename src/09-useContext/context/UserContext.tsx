import {  createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data"

//♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢ Types e Interfaces

type AuthStatus ='checking'|'authenticated'|'not-authenticated'

interface UserContextProps{
  //state
    authStatus: AuthStatus,
    user: User | null

  //methods
    login: (userId: number)=>boolean,
    logout: ()=>void
}

//♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢ Contexto

export const UserContext = createContext({} as UserContextProps)

//♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢ Provider - HOC (High Order Component)

const UserContextProvider = ({children}:PropsWithChildren) => {
    //const[name, setName]=useState('Raúl' )
    
    //variables de estado
      const [authStatus, setAuthStatus] =  useState<AuthStatus>('checking')

      const [user, setUser] =  useState<User|null>(null)

    //Funciones
      const handleLogin = (userId: number)=>{
        console.log({userId})
        return true
      }

      const handleLogout = ()=>{

        console.log("logout....")

      }

    return (
      <UserContext value={{
        authStatus:authStatus,
        user:user,
        login:handleLogin,
        logout:handleLogout
      }}>
          {children}
      </UserContext>
    )
}
export default UserContextProvider

