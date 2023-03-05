import React from 'react';

import Main from './Main/Main';
import About from './About/About';
import Programs from './Programs/Programs';
import Team from './Team/Team';
import Hero from './Hero/Hero';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Main /> 
      </div>
      <About/>
      <Programs/>
      <Team/>
      <Hero/>
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;