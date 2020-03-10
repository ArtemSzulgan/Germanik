import React from 'react';
import './carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import {FormattedMessage} from 'react-intl';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import logo from '../../assets/logo.png';

const images = [photo1, photo2, photo3];

function PhotoCarousel() {
  return (
    <div className="carousel_container">
      <Carousel>
        {
          images.map((item, i)=>{
            return <Carousel.Item className="max-vh-100 wd-100" key={i}>
              <img
                src={item}
                alt="img"
                className='d-block w-100'
              />
              <Carousel.Caption>
                <img src={logo} alt="logo" className="carousel_logo"/>
                <h3><FormattedMessage id="carousel.title" defaultMessage="Lorem"/></h3>
                <p><FormattedMessage id="carousel.content" defaultMessage="Lorem"/></p>
              </Carousel.Caption>
            </Carousel.Item>;
          })
        }
      </Carousel>
      <img src={logo} alt="logo" className="carousel_mobile_logo"/>
    </div>
  );
}

export default PhotoCarousel;
