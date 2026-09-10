import React from "react"

//Interfaces
interface Props{
    subtitle:string,
    callMyAPI: ()=>void
}

const MySubTitle = React.memo(({subtitle, callMyAPI}:Props) => {
  console.log("My Subtitle re-render")
  return (
    <>
        <h6 className="text-2xl font-bold">
            {subtitle}
        </h6>
        <button className="bg-indigo-500 text-white px-5 py-1 rounded-md cursor-pointer"
            onClick={callMyAPI}
        >
            Llamar a función
        </button>
    </>
  )
})

export default MySubTitle
