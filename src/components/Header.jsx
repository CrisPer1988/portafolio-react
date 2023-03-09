import React from 'react'
import "./styles/header.css"

const Header = () => {
  return (
    <div className='container__header' id='inicio'>
        
        <div className='header__info'>
            <h3>Hola, soy <span className='efecto__escribir'>Cristian PEREZ</span></h3>
            <h2>Desarrollador Front End</h2>
            <div className='content__icons-header'>
            <a href="https://www.linkedin.com/in/cristian-norberto-perez-2b1b52260/" target={"_blank"}><i className='bx bxl-linkedin icons__header'></i></a>
            <a className='icons__header'  href="/images/Curriculum-Cristian-Norberto-Perez.pdf" target={"_blank"}>CV</a>
            </div>
            
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