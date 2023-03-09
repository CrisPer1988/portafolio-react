import React, { useState } from 'react'
import "./styles/navBar.css"
import { Link } from "react-scroll";

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () =>{
    setOpenMenu(!openMenu)
  }

  return (
    <header>
    <nav className='container__navBar'>
      {
        openMenu ? <i onClick={handleOpenMenu} class='bx bx-x'></i> : <i onClick={handleOpenMenu} class='bx bx-menu'></i>
      }
      
       <ul className={`ul__navBar ${openMenu ? "ul__navBar-active" : ""}`}> 
       <Link onClick={handleOpenMenu} className='link__navBar' to="inicio" spy={true} smooth={true} offset={-80} duration={500}>Inicio</Link>
       <Link onClick={handleOpenMenu} className='link__navBar' to="acercaDeMi" spy={true} smooth={true} offset={-80} duration={500}>Acerca de mi</Link>
       <Link onClick={handleOpenMenu} className='link__navBar' to="proyectos" spy={true} smooth={true} offset={-80} duration={500}>Proyectos</Link>
       <Link onClick={handleOpenMenu} className='link__navBar' to="habilidades" spy={true} smooth={true} offset={-80} duration={500}>Habilidades</Link>
       <Link onClick={handleOpenMenu} className='link__navBar' to="contacto" spy={true} smooth={true} offset={-80} duration={500}>Contacto</Link>
       
      
       {/* <li><a onClick={preventDEFAULT} href="#proyectos">Inicio</a></li>
        <li><a href="">Acerca de mi</a></li>
        <li><a href="">Proyectos</a></li>
        <li><a href="">Habilidades</a></li>
        <li><a href="">Contacto</a></li>  */}
      </ul>
    </nav>
    </header>
  )
}

export default NavBar