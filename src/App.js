import React from 'react';

import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';

// Pages


function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
