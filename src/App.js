import React from 'react';

import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';

// Pages


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />} />
          </Route>
          <Route exact path="/bio">
            <Route index element={<Bio />} />
          </Route>
          <Route exact path="/gallery">
            <Route index element={<Gallery />} />
          </Route>
          <Route exact path="/subscribe">
            <Route index element={<Subscribe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
