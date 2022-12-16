import { useState } from "react"

function Contratos() {

  const [autos, setAutos] = useState([])

  async function getContratos() {
    
    const data = await fetch("http://localhost:8080/automovel")
    const dataJson = await data.json()

    setAutos(dataJson)

    console.log(autos)
  }
  return (
    <>
    <h1>HELLO CONTRATO</h1>
    <button onClick={getContratos}>AUTOS</button>
    </>
  )
}

export default Contratos