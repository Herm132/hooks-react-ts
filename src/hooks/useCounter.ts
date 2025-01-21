import { useState } from "react"

export const useCounter = (value:number=0) => {
  const [counter, setCounter] = useState(value)

  const increment=() => {
    setCounter(counter+1)
  }
  const decrement=(negative:boolean=false) => {
    if(!negative && counter - 1 <0){
      setCounter(0)
      return
    }
    setCounter(counter-1)
    
    
  }
  const reset=() => {
    setCounter(0)
  }
  return {

    counter,
    increment,
    decrement,
    reset
  }
}