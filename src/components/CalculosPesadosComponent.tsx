import { useMemo, useState } from "react"
export const CalculosPesadosComponent = () => {

  const [show, setShow] = useState(true)
  const [listaNumeros, setListaNumeros] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  const [inputValue, setInputValue] = useState<string>("");
  const getCalculo = useMemo(() => {
    console.log('Calculando')
    const resultado=listaNumeros.reduce((a, b) => a * b, 1)
    console.log(resultado)
    return resultado

  }, [listaNumeros])

  // const agregarNumero = () => {
  //   setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
  //   console.log(listaNumeros)
  // }

  const agregarNumero = (e: React.FormEvent) => {
    e.preventDefault(); 
    const numero = parseInt(inputValue);
    if (!isNaN(numero) && numero !== 0){
      setListaNumeros([...listaNumeros, numero]);
      console.log(listaNumeros);
    } else {
      alert("Por favor, ingresa un número válido");
    }
  };
  return (
    <div>
      <h1>Calculo:</h1>
      {}
      <p>{getCalculo}</p>
      <button className="btn btn-primary" onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}</button>
    <form onSubmit={agregarNumero}>
    <input 
      value={inputValue}
      onChange={e=>setInputValue(e.target.value)}
      placeholder="1"
      type="number"
      id="number"
      required
      />
      <button className="btn btn-primary" type="submit">Agregar</button>
    

    </form>
</div>
  )
}
