import React from "react";
import "./Style/Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
import { FormattedMessage} from "react-intl";
import photo1 from '../assets/photo11.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import logo from '../logo.jpg';

const images=[
    {
        photo: photo1,
        header: <FormattedMessage id="carousel.title" defaultMessage="Lorem"/>,
        body: <FormattedMessage id="carousel.content" defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    },
    {
        photo: photo2,
        header: <FormattedMessage id="carousel.title" defaultMessage="Lorem"/>,
        body: <FormattedMessage id="carousel.content" defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    },
    {
        photo: photo3,
        header: <FormattedMessage id="carousel.title" defaultMessage="Lorem"/>,
        body: <FormattedMessage id="carousel.content" defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    },
];

function PhotoCarousel() {
    return(
        <div className="carousel_container">
            <Carousel>
                {
                    images.map((item, i)=>{
                        return <Carousel.Item className="max-vh-100 wd-100" key={i}>
                            <img
                                src={item.photo}
                                alt="img"
                                className='d-block w-100'
                            />
                            <Carousel.Caption>
                                <img src={logo} alt="logo" className="carousel_logo"/>
                                <h3>{item.header}</h3>
                                <p>{item.body}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                }
            </Carousel>
        </div>
    )
}

export default PhotoCarousel;