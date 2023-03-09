import React from 'react'
import "./styles/header.css"

const Header = () => {
  return (
    <div className='container__header' id='inicio'>
        
        <div className='header__info'>
            <h3>Hola, soy <span>Cristian PEREZ</span></h3>
            <h2 className='efecto__escribir'>Desarrollador Front End</h2>
            <i className='bx bxl-linkedin'></i>
        </div>
        {/* <div className='header__links'> */}
        
        {/* </div> */}
        <header className='content__header-img'>
            <img className='header__img' src="./images/foto-header.jpg" alt="" />
        </header>
        
        
    </div>
  )
}

export default Header