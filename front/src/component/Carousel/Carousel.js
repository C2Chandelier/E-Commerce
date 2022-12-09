import "./Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'

function Slider() {
  return (
    <Carousel>
    <div>
        <img src="./images/Image_Carousel/Carousel.jpg" alt="costume"/>
    </div>
    <div>
        <img src="./images/Image_Carousel/Carousel2.jpg" alt="costume"/>
    </div>
    <div>
        <img src="./images/Image_Carousel/Carousel3.jpg" alt="costume" />
    </div>
    </Carousel>
  )
}

export default Slider
