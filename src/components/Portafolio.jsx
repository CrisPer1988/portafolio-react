import React, { useState } from 'react'
import "./styles/portafolio.css"
import imgData from '../utils/imgData'

const Portafolio = () => {


    const [imgSelected, setImgSelected] = useState(0)

    const data = imgData
  
    const styleMovement = {
        transform: `translateX(calc(-${imgSelected} / 6 * 100%))`,
    }

    const handlePrevious = () =>{
        if(imgSelected -1 < 0){
            setImgSelected(5)
        } else {
            setImgSelected(imgSelected  - 1)
        }
    }

    const handleNext = () => {
        if(imgSelected +1 > 5){
            setImgSelected(0)
        } else {
            setImgSelected(imgSelected + 1)
        }
    }

  return (
    <div className='container__portafolio' id='proyectos'>
        <h2 className='tittle__portafolio'>[ ...Proyectos ]</h2>
        <div className='slider'>
        <button onClick={handlePrevious} className='slider__btn slider__btn-left'><i className='bx bx-chevron-left'></i></button>
            <div style={styleMovement} className='slider__movement'>
                {
                    data.map(img => (
                        <div key={img.id} className='slider__container-img'>
                            <img className='slider__img' src={img.img} alt="" />
                            <div className='content__links'>
                                <p>{img.descripcion}</p>
                            <a href={img.link} target="_blank">{img.link}</a>
                            </div>  
                        </div>
                    ))


                    
                }
                {/* <div className='slider__container-img'>
                    <img className='slider__img' src="/images/app-clima.png" alt="" />
                    <img className='slider__img' src="/images/ecommerce-react.png" alt="" />
                    <img className='slider__img' src="/images/user-form.png" alt="" />
                    <img className='slider__img' src="/images/rick-morty.png" alt="" />
                    <img className='slider__img' src="/images/ecommerce-javascript.png" alt="" />
                </div>    */}
            </div>
            <button onClick={handleNext} className='slider__btn slider__btn-right'><i className='bx bx-chevron-right'></i></button>
        </div>
        
    </div>
  )
}

export default Portafolio