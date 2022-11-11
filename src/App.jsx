import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' to={<h1>Poner la ruta aquí...</h1>} />
      </Routes>
    </>
  )
}

export default App
