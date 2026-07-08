import { useState, useEffect } from "react"

    const colors = {
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',
        default: 'bg-gray-500'
    }

//**************************************************** Types ********/

    type TrafficLightColor = keyof typeof colors;

const TrafficLightWithEffect = () => {

    //**************************************************** Hook: useState ********/

        const [light, setLight] =  useState<TrafficLightColor>('red');

        const [countDown, setCountDown] = useState(5)

    //**************************************************** Hook: useEffect ********/
        useEffect( ()=>{
            if (countDown===0) return
            
            console.log({countDown})

            const intervalID = setInterval(()=>{
                setCountDown(prev => prev-1)
            },1000)

            return ()=>{
                console.log("Cleanup effect")
                clearInterval(intervalID)
            }

         },[countDown])


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">

            <h1 className="text-white text-4xl font-bold ">Semáforo con useEffect</h1>

            <h2 className="text-purple-400 text-3xl font-bold"> Countdown: {countDown} </h2>

            <div className={`w-32 h-32 ${ light=="red"? colors[light] : colors.default } rounded-full`}></div>

            <div className={`w-32 h-32 ${ light=="yellow"? colors[light] : colors.default } rounded-full`}></div>
            <div className={`w-32 h-32 ${ light=="green"? colors[light] : colors.default } rounded-full`}></div>
        </div>
        </div>
    )
}

export default TrafficLightWithEffect
