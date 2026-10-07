import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "@/09-useContext/context/UserContext";
import { toast } from "sonner";

const LoginPage = () => {
  //Uso de contexto UserContext
    const {login} = useContext(UserContext)

  //Variables de estado
    const [userId, setUserid]= useState('');

  //Objeto navigation
    const navigation = useNavigate()

  //Funciones

  const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(`Usted está buscando al user con id ${+userId}`)
    //Usar propiedad login del contexto
      const result = login(+userId)
      
      console.log(result)

      if (!result) {
        toast.error("Usuario no econtrado",{
          richColors: true
        })
        return
      }

      //Si usuario existe....

      navigation("/profile")   
  }

  return (
    <div className="flex flex-col items-center  min-h-screen">
        <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
        <hr />
        <form action="" className="flex flex-col gap-2 my-10"
          onSubmit={handleSubmit}
        >

          <Input 
            placeholder="ID del usuario" 
            type="number"
            value={userId}
            onChange={(event)=>setUserid(event.target.value)}
          />

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600">
            Login
          </Button>

        </form>
      
        <Link to="/">
          <Button className="bg-cyan-700 hover:bg-cyan-800 px-5 py-4">Volver al Home</Button>
        </Link>

    </div>
  )
}

export default LoginPage
