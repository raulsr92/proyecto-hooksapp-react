import {use, type JSX} from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router"

interface Props{
    element:  JSX.Element  //o también de tipo React.ReactNode
}


const PrivateRoute = ({element}:Props) => {

    //Uso de contexto UserContext

        const {authStatus} = use(UserContext)

    //Condicionales
    
        if (authStatus==='checking') {
            return <h1>Verificando sesión...</h1>;
        }

        if(authStatus==="authenticated"){
            return element
        }


        return <Navigate to="/login" replace />
}

export default PrivateRoute
