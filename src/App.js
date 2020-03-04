import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import PhotoCarousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Contacts from './components/Persons/Presons';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <PhotoCarousel/>
      <About/>
      <Contacts/>
      <ContactUs/>
      <Footer/>
    </>

  );
}

export default App;
