import { useState } from "react"


const useCounter = (initialValue: number = 1) => {

    //**************************************************** Hook: useState (variables de estado) ********/

    const[counter, setCounter] =useState(initialValue);

    //**************************************************** Métodos ********/

    const increment = ()=>{
        setCounter(counter+1)
    }

    const decrement = ()=>{

        if (counter<=1) return 

        setCounter(counter-1)
    }


  return {
    //Properties
    counter,

    //Methods
    increment,
    decrement,
  }
}

export default useCounter
