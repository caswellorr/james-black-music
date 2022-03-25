import React from 'react';

import './App.scss';

//Components
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

// Pages


function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}

export default App;
