import { useState } from 'react'
import './App.css'
import "./components/styles/load.css"
import AcercaDeMi from './components/AcercaDeMi'
import Contacto from './components/Contacto'
import Habilidades from './components/Habilidades'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Portafolio from './components/Portafolio'

function App() {

  const [load, setLoad] = useState(true)

  setTimeout(() => {
    setLoad(false)
  }, 5100);
 

  return (

    <div className="App">
   {
    load ? <div className='load'>
      
      <h1 className='title__load'><span className='corchetes'>&lt;</span> Cristian Perez <span className='corchetes'>/&gt;</span></h1>
      <div className='content__load'>
      </div>
      
      </div> :
   
 
      <NavBar />}
      <Header />
      <AcercaDeMi />
      <Portafolio />
      <Habilidades />
      <Contacto />
   
    
    </div>
  )
}

export default App
