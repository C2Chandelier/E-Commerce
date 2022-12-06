import "./Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'

function Slider() {
  return (
    <Carousel>
    <div>
        <img src="./images/Image_Carousel/Carousel.jpg" />
    </div>
    <div>
        <img src="./images/Image_Carousel/Carousel2.jpg" />
    </div>
    <div>
        <img src="./images/Image_Carousel/Carousel3.jpg" />
    </div>
    </Carousel>
  )
}

export default Slider
