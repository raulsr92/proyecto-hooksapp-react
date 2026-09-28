import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"


const ProfessionalApp = () => {
  return (
    <div className="bg-gradient">
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default ProfessionalApp

