import React from 'react'
import AboutHero from '../Components/AboutHero/AboutHero';
import Benefits from '../Components/Benefits/Benefits';
import ProviderMap from '../Components/ProviderMap/ProviderMap';
import NewsLetters from '../Components/NewsLetters/NewsLetters';
import OurFeatures from '../Components/OurFeatures/OurFeatures';
import ProviderDetails from '../Components/ProviderDetails/ProviderDetails';
import Testimonials from '../Components/Testimonials/Testimonials';
import './CSS/AboutPage.css';

function About() {
  return (
    <div className='about'>
      <AboutHero />
      <OurFeatures />
      <Benefits />
      <ProviderDetails />
      <ProviderMap />
      <Testimonials />
      <NewsLetters />
    </div>
  )
}

export default About;
