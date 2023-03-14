import React from 'react'
import "./styles/contacto.css"

const Contacto = () => {
  return (
    <div className='container__contact' id='contacto'>
      <h2 className='title title__contacto'><span className='corchetes'>&lt;</span> Contacto <span className='corchetes'>/&gt;</span></h2>
      <div className='content__icon-contact'>
        <div className='icon__contact'>
          <a className='contacto__text' href="https://wa.me/5492622468440" target={"_blank"}><i class='bx bxl-whatsapp'></i></a>
        </div>
        <div className='icon__contact'>
          <a className='contacto__text' href="mailto:norberto.cp@hotmail.com" target={"_blank"}><i class='bx bx-envelope'></i></a>
        </div>
      </div>
      <h6 className='copyright'>Copyright © 2023 Cristian Perez.</h6>
    </div>
  )
}

export default Contacto

