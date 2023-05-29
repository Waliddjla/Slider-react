import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'

export default function Slider() {

    const[slideAnim, setSlideAnim] = useState({
        index:1,
        inProgress: false
    })
  return (
    <div>slider</div>
  )
}

