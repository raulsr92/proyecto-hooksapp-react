import { useEffect } from "react"
import { getUserAction } from "./api/get-user.action"




const ClientInformation = async({id}:{id:number}) => {

    //useEffect: NO VAMOS A UTILIZAR
    /*
        useEffect(()=>{

            getUserAction(id)
            .then(user => console.log(user))

        },[id])
    */

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">
            Raúl - #992
        </h2>


        <p className="text-white text-2xl">Lima, Perú</p>
        <p className="text-white text-xl">Rol: Administrador</p>

    </div>
  )
}

export default ClientInformation
