import { useReducer, useState } from "react"
const initialState={
  counter:0
};


interface State {
  counter: number;
}

interface Action {
  type: string;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
export const ContadorReducerComponent = () => {
  const [counter, setCounter] = useState(0)
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
const handledIncrement=()=>{
  setCounter(counter+1)

}
const handledDecrement=()=>{
  setCounter(counter-1)
}
const handledIncrementReduce=()=>{
  dispatch({type:'INCREMENT'})

}
const handledDecrementReduce=()=>{
  dispatch({type:'DECREMENT'})
}


  return (
    <div>
      <h1>Contador Use State</h1>
      <p>Contador : {counter}</p>
      <button onClick={handledDecrement}>-1</button>
      <button onClick={handledIncrement}>+1</button>

      <hr />
      <h1>Contador Reducer</h1>
      <hr />
      <p>Contador : {state.counter}</p>
      <button onClick={handledDecrementReduce}>-1</button>
      <button onClick={handledIncrementReduce}>+1</button>


    </div>
  )
}