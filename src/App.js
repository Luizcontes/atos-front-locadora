import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cadastro from './components/Cadastro/Cadastro';
import Contratos from './components/Contratos/Contratos';


function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  function login() {
    setLogged(!logged);
    console.log("aqui")
  }

  function setUserFunc(e) {
    setUser(e.target.valu)
  }

  function setPassFunc(e) {
    setPassword(e.target.value)
  }

  async function authenticate(e) {
    e.preventDefault()

    const aut = await fetch("http://localhost:8080")
    if (aut.status === 200) {
      setLogged(true)
    }
  }

  return (
    <div className="App">
      <Navbar logged={logged} login={login} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="login" element={<Login authenticate={authenticate} setUser={setUserFunc} setPass={setPassFunc} user={user} password={password} />} />
          <Route path="contratos" element={logged ? <Contratos /> : <Login authenticate={authenticate} setUser={setUserFunc} setPass={setPassFunc} user={user} password={password} />}/>
          <Route path="cadastro" element={logged ? <Cadastro /> : <Login authenticate={authenticate} setUser={setUserFunc} setPass={setPassFunc} user={user} password={password} />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
