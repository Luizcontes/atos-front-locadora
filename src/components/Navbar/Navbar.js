import './Navbar.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ logged, login }) {

  const [autos, setAutos] = useState([])

  async function getCars() {
    const automovel = await fetch("http://localhost:8080/automovel")
    const autJson = await automovel.json()
    setAutos(autJson)
  }

  return (
    <div className="navbar">
      <img src="img/logo.jpg" alt='logo' style={{width: '130px'}}></img>
      <ul className="navbar__list">
        <Link to="/"><li>HOME</li></Link>
        {logged ? <Link to="/contratos"><li>CONTRATOS</li></Link> : ""}
        {logged ? <Link to="/cadastro"><li>CADASTRO</li></Link> : ""}
        <Link to="/login"><li>LOGIN</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;