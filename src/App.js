import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import PhotoCarousel from "./components/Carousel";
import About from "./components/About";
import Contacts from "./components/Presons";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


function App() {
    return(
        <>
        <Header/>
        <PhotoCarousel/>
        <About/>
        <Contacts/>
        <ContactUs/>
        <Footer/>
        </>

    )
}

export default App;
