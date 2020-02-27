import React, {Component} from 'react';
import PhotoCarousel from "../components/Carousel";
import Features from "../components/Features";
import Contacts from "../components/contacts/Contacts";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


export default class Home extends Component{
    render() {
        return(
            <div>
                <PhotoCarousel/>
                <Features/>
                <Contacts/>
                <ContactUs/>
                <Footer/>
            </div>
        )
    }
}
