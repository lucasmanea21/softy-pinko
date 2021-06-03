import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CardsSection from './components/HeroSection/HeroCards/CardsSection';
import WorkSection from './components/WorkSection/WorkSection';
import InfoSection from './components/InfoSection/InfoSection';
import Testimonials from './components/Testimonials/Testimonials';
import PricingSection from './components/Pricing Plans/PricingSection';
import NumberSection from './components/Numbers Section/NumberSection'
import Blog from './components/Blog Entries/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <React.Fragment>
        <Navbar />
        <HeroSection />
        <CardsSection />
        <InfoSection/>
        <WorkSection />
        <Testimonials />
        <PricingSection />
        <NumberSection />
        <Blog/>
        <Contact/>
        <Footer />
    </React.Fragment>
  );
}

export default App;
