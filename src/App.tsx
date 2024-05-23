import './App.css';
import Header from './header/header.tsx';
import HeroSection from './heroSection/heroSection.tsx'
import AboutUs from './aboutUs/aboutUs.tsx';
import WhyUs from './whyUs/whyUs.tsx';
import Menu from './menu/menu.tsx';
import Testimonials from './testimonials/testimonials.tsx';
import Events from './events/events.tsx';
import Chefs from './chefs/chefs.tsx';
import BookTable from './bookTable/bookTable.tsx'
import React from 'react';
import Gallery from './gallery/gallery.tsx';
import Footer from './footer/footer.tsx';

function App() {
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="#nav-header" data-bs-offset="0">
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <WhyUs/>
      <Menu/>
      <Testimonials/>
      <Events/>
      <Chefs/>
      <BookTable/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
