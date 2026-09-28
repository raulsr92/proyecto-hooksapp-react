import { use, type Usable } from "react"
import { type User } from "./api/get-user.action"


    interface Props{
        getUser: Usable<User>
    }

const ClientInformation = ({getUser}:Props) => {

    //Uso de use API (Clase 158)
        //☆☆☆☆☆ Desempaquetar la promesa

            const user = use(getUser);

    //useEffect: NO VAMOS A UTILIZAR
    /*
        useEffect(()=>{

            getUserAction(id)
            .then(user => console.log(user))

        },[id])
    */

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">{ user.name} - {user.id}</h2>
        <p className="text-white text-2xl">{user.location}</p>
        <p className="text-white text-xl">Rol: {user.role}</p>
    </div>
  )
}

export default ClientInformation
