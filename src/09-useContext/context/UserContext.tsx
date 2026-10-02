import { useState, type PropsWithChildren } from "react"

/*
interface UserContextProps{
    children: React.ReactNode
}*/

const UserContextProvider = ({children}:PropsWithChildren) => {
    
    const[name, setName]=useState('Raúl' )
    
  return (
    <>
        {children}
    </>
  )
}

export default UserContextProvider

