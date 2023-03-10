import React from 'react'
import "./styles/habilidades.css"

const Habilidades = () => {
    return (
        <div className='container__habilidades' id='habilidades'>
            <h2 className='title'><span className='corchetes'>&lt;</span> Habilidades <span className='corchetes'>/&gt;</span></h2>
            <div className='content__habilidades-grid'>
                <div className='content__img-habilidades'>
                    <img className='habilidades__img' src="/images/HTML-logo.png" alt="" />
                    <img className='habilidades__img' src="/images/js-logo.png" alt="" />
                    <img className='habilidades__img' src="/images/nodejs.png" alt="" />
                    <img className='habilidades__img' src="/images/redux-logo.png" alt="" />
                    <img className='habilidades__img' src="/images/react-router_logo.png" alt="" />
                    <img className='habilidades__img' src="/images/logo-react.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Habilidades