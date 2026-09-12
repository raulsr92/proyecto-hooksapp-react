import useCounter from "@/hooks/useCounter"
import { useMemo } from "react"


const heavyStuff = (iterationNumber: number)=>{

    console.time('Heavy_stuff_started')

    for (let i = 0; i < iterationNumber ; i++) {

        console.log("Avanzando")
    }


    console.timeEnd('Heavy_stuff_started')

    return `${iterationNumber} iteraciones realizadas`

}

const MemoCounter = () => {

    //Usar custom Hook useCounter

        const{counter, increment} = useCounter(40_000)

        const{counter:counter2, increment:increment2} = useCounter(10)

    //Usar funciones helper

        const myHeavyValue = useMemo( ()=>heavyStuff(counter),[counter])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">Memo - useMemo {myHeavyValue}</h1>
            <hr />
            <h4>
                Counter: {counter}
            </h4>
            <h4>
                Counter 2: {counter2}
            </h4>

            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increment}> +1 </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increment2}> +1 para Counter2</button>
            </div>
        </div>
    )
}

export default MemoCounter
