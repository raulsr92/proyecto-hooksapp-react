import {  createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"

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
    //variables de estado
      const [authStatus, setAuthStatus] =  useState<AuthStatus>('checking')

      const [user, setUser] =  useState<User|null>(null)

    //Funciones
      const handleLogin = (userId: number)=>{
        const user = users.find((user)=> user.id === userId)

        if (!user) {
          console.log(`User with id ${userId} was not found`)
          setUser(null)
          setAuthStatus("not-authenticated")
          return false
        }
        //Si usuario existe....

          setUser(user)
          setAuthStatus("authenticated")
          return true
      }

      const handleLogout = ()=>{

        setAuthStatus("not-authenticated")
        setUser(null)

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

