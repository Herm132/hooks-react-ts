import React from "react"
type Props = {
  incrementar: (val: number) => void;
}
export const IncrementarComponent = React.memo((props:Props) => {
  console.log("Dibujando")
  return (
    <button className="btn btn-primary" onClick={()=>props.incrementar(1)}>+1</button>

  )
})


