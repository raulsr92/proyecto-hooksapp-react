import { useState, useEffect } from "react";

    const colors = {
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',
        default: 'bg-gray-500'
    }

//**************************************************** Types ********/
    type TrafficLightColor = keyof typeof colors;

const useTrafficLight = () => {

    //**************************************************** Hook: useState (variables de estado) ********/

        const [light, setLight] =  useState<TrafficLightColor>('red');
        const [countDown, setCountDown] = useState(5)

    //**************************************************** Hook: useEffect (efectos) ********/

    //✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ Efecto 1: Actualización de contador  ✈ ✈ ✈ ✈/
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

    //✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ Efecto 2: Cambio en el color   ✈ ✈ ✈ ✈/
         useEffect(()=>{

            if (countDown > 0) return;

            setCountDown(5);

            if (light === 'red') {
                setLight("yellow")
            } else if (light === 'yellow') {
                setLight("green")
            } else if (light === 'green') {
                setLight("red")
            }
            
         },[countDown, light])
        
  return {
    light,
    countDown,
    colors
  }
}

export default useTrafficLight
