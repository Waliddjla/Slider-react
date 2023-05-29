import React from 'react'
import leftArrow from './Slider/icons/left-arrow.svg'
import rightArrow from './Slider/icons/right-arrow.svg'

export default function BtnSlider({direction, moveSlide}) {

  return (
    <button className='btn-slide'>
        <img src={process.env.PUBLIC_URL + leftArrow} alt="" />
    </button> 
  )
}
