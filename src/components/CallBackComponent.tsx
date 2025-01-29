import { useCallback, useState } from "react"
import { IncrementarComponent } from "./IncrementarComponent"
export const CallBackComponent = () => {
  const [counter, setCounter] = useState<number>(0)
  const incrementarPadre=  useCallback(
    (val:number) => {
      setCounter(cont=>cont+val);
    },
    [],
  )
  return (
    <>
    <h1> Contador:{counter}</h1>
      <IncrementarComponent incrementar={incrementarPadre}></IncrementarComponent>

    </>
  )
}