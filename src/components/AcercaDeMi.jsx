import React from 'react'
import "./styles/acercaDeMi.css"


const AcercaDeMi = () => {
  return (
    <div className='contentainer__acercaDeMi' id='acercaDeMi'>
      <div className='content__info-acercaDeMi'>
        <h2 className='title'><span className='corchetes'>&lt;</span> Acerca de mi <span className='corchetes'>/&gt;</span></h2>
          <p className='text__acercaDeMi'>Desarrollador front end, preparado para los desafios que
          se presentan en una empresa. De preferencia me gusta trabajar
          en equipo. Dispuesto a aprander las tecnologias que sean 
          necesarias para mi buen desarrollo y desempeño.
          Experiencia realizando proyectos en equipo e individualmente.
          Resido en Argentina y tengo 34 años.
          </p>
      </div>
    </div>
  )
}

export default AcercaDeMi