import React from 'react'
import "./styles/navBar.css"

const NavBar = () => {
  return (
    <nav className='container__navBar'>
   
        <ul className='ul__navBar'>
            <li>Inicio</li>
            <li>Acerca de mi</li>
            <li>Proyectos</li>
            <li>Habilidades</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}

export default NavBar