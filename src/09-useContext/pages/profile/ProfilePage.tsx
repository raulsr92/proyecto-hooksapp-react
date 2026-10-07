import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"

const ProfilePage = () => {

    //Uso de contexto UserContext
      
    //const {user} = useContext(UserContext)
    const {user,logout} = use(UserContext)

   return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Perfil del Usuario</h1>
        <hr />

        <pre className="my-4">
          { JSON.stringify(user, null, 2)}
        </pre>

          <Button 
            className="bg-cyan-700 hover:bg-cyan-800 px-10 py-4"
            onClick={logout}
            >
              Salir
          </Button>

    </div>
  )
}

export default ProfilePage
