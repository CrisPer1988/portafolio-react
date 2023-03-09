import React from 'react'
import "./styles/contacto.css"

const Contacto = () => {
  return (
    <div className='container__contact' id='contacto'>
        <h2>Contacto</h2>
        <div className='content__icon-contact'>
        
        <i class='bx bxl-whatsapp'></i>
        <i class='bx bx-envelope'></i>
        
        <h3 className='contacto__text'>+54 9 2622-468440</h3>
        
        <h3 className='contacto__text'>norberto.cp@hotmail.com</h3>
        </div>
    </div>
  )
}

export default Contacto