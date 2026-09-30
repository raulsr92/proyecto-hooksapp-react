import { Button } from "@/components/ui/button"

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Perfil del Usuario</h1>
        <hr />

        <pre className="my-4">
          { JSON.stringify({}, null, 2)}
        </pre>

          <Button  className="bg-cyan-700 hover:bg-cyan-800 px-10 py-4">Salir</Button>

    </div>
  )
}

export default ProfilePage
