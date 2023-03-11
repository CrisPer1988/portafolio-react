import './App.css'
import AcercaDeMi from './components/AcercaDeMi'
import Contacto from './components/Contacto'
import Habilidades from './components/Habilidades'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Portafolio from './components/Portafolio'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <AcercaDeMi />
      <Portafolio />
      <Habilidades />
      <Contacto />
    </div>
  )
}

export default App
