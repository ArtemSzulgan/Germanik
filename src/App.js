import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import PhotoCarousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Contacts from './components/Persons/Presons';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header/>
      <PhotoCarousel/>
      <About/>
      <Contacts/>
      <ContactUs/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
