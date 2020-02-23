import React from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from '../assets/photo11.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import logo from '../logo.jpg'

function PhotoCarousel() {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={photo1}
                        alt="img"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <img src={logo} alt="logo" height='250'/>
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={photo2}
                        alt="img"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <img src={logo} alt="logo" height='250'/>
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={photo3}
                        alt="img"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <img src={logo} alt="logo" height='250'/>
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default PhotoCarousel;