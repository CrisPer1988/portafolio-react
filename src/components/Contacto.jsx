import React from 'react'
import "./styles/contacto.css"

const Contacto = () => {
  return (
    <div className='container__contact'>
        <h2>Contacto</h2>
        <div className='content__icon-contact'>
        <i class='bx bx-envelope'></i>
        <i class='bx bxl-whatsapp'></i>
        <span>CV</span>
        <h3 className='contacto__text'>norberto.cp@hotmail.com</h3>
        <h3 className='contacto__text'>+54 9 2622-468440</h3>
        <a className='contacto__text-a'  href="/images/Curriculum-Cristian-Norberto-Perez.pdf" target={"_blank"}>Curriculum Vitae</a>
        </div>
    </div>
  )
}

export default Contacto