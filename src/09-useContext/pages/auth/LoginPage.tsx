import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen">
        <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
        <hr />
        <form action="" className="flex flex-col gap-2 my-10">

          <Input 
            placeholder="ID del usuario" 
            type="number"
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
