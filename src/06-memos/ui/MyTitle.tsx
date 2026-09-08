import React from "react"

//Interfaces
interface Props{
    title:string
}

//Componente 

const MyTitle = React.memo(({title}:Props) => {

  console.log("My title re-render")

  return (

        <h1 className="text-3xl">
            {title}
        </h1>
  )
})

export default MyTitle
