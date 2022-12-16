import './Cadastro.css'
import { useState } from "react"

function Cadastro() {

  const [auto, setAutos] = useState([])

  async function getContratos() {

    const data = await fetch("http://localhost:8080/automovel")
    const dataJson = await data.json()

    console.log(dataJson)
    setAutos(dataJson)

  }
  return (
    <div className="cadastro">
      <div className='cadastro__form'>
        <div className="image">
          <img src='img/car.jpg'></img>
        </div>
        <div inputs>
          <form className='form'>
            <label for="marca">Marca</label>
            <input type="text" id="marca" name="marca"></input>

            <label for="modelo">Modelo</label>
            <input type="text" id="modelo" name="modelo"></input>

            <label for="ano">Ano</label>
            <input type="text" id="ano" name="ano"></input>

            <label for="placa">Placa</label>
            <input type="text" id="placa" name="placa"></input>

          </form>
        </div>
        <button onClick={getContratos}>CADASTRAR</button>
      </div>
      <div>
        {auto.map(a => {
          return (
            <div>
              <p>placa: {a.placa}</p>
            </div>
          )
        }
        )}
      </div>

    </div>
  )
}

export default Cadastro